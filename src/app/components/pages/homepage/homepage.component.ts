import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CoverComponent } from '../../shared/cover/cover.component';
import { Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../../environments/environment.development';
import { MatIconModule } from '@angular/material/icon';
import { GeneralServicesService } from '../../../services/general-services.service';
import { ToasterService } from '../../../services/toaster.service';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { Layout2Component } from '../../common/layouts/layout2/layout2.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  imports: [
    FooterComponent,
    CoverComponent,
    TopbarComponent,
    CmsTopbarComponent,
    NgxSpinnerModule,
    Layout2Component,
    MatIconModule,
    ToastModule,
  ],
  providers: [ToasterService, MessageService],
})
export class HomepageComponent implements OnInit {
  hasChanges: boolean = false;
  isSideBar: boolean = false;
  showHcpIcon: boolean = false;
  isEdit: boolean = true; //Mode
  showNavLogo: boolean = false; //Logo toggle
  homeLayouts: any[] | [] = []; // Array of homelayouts
  @Output() save = new EventEmitter(); //Submit
  lastScrollTop: number = 0;
  showNavbarTimeout: any;
  constructor(
    private service: GeneralServicesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private renderer: Renderer2,
    public msgService: ToasterService,
    private cdr: ChangeDetectorRef
  ) {}

  cities: City[] | undefined;
  imageUrl = environment.image_url_server;
  selectedCity: City | undefined;
  selectedDate: Date | null = null; // Initialize to null

  responsiveOptions: any[] | undefined;
  @Output() onClick = new EventEmitter();
  // homeName: string = 'Home-HCP';
  homeDescription: any;

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.preloadImages();
   this.fetchData()
  }

  fetchData(){
    this.spinner.show();
    this.service.getHomeLandingPageData().subscribe(
      (response) => {
        this.homeLayouts = response.data;
        this.spinner.hide();
      },
      (error) => {
        console.error('Error fetching home page data:', error);
        this.spinner.hide();
      }
    );
  }
  imageUrlsToPreload: string[] = [
    '../../../../assets/Menu1.jpg',
    '../../../../assets/Menu2.jpg',
    '../../../../assets/Menu3.jpg',
    '../../../../assets/Menu4.jpg',
    '../../../../assets/Menu5.jpg',
    '../../../../assets/Menu6.jpg',
    '../../../../assets/Menu7.jpg',
    '../../../../assets/Menu8.jpg',
    '../../../../assets/Menu9.jpg',
    '../../../../assets/Menu10.jpg',
  ];
  preloadImages(): void {
    this.imageUrlsToPreload.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (window.scrollY > 550) {
      this.showHcpIcon = true;
    } else {
      this.showHcpIcon = false;
    }
    if (window.scrollY > 70) {
      this.showNavLogo = true;
      this.renderer.setStyle(
        document.querySelector('.footer'),
        'opacity',
        '100'
      );
    } else {
      this.renderer.setStyle(document.querySelector('.footer'), 'opacity', '0');
    }
    // Check if scrolling down
    if (scrollTop > this.lastScrollTop) {
      // Scrolling down
      this.renderer.setStyle(
        document.querySelector('.top-navbar'),
        'top',
        '-80px'
      );
      // clearTimeout(this.showNavbarTimeout); // Clear the timeout if scrolling down
    } else if (scrollTop === 0) {
      this.renderer.setStyle(
        document.querySelector('.top-navbar'),
        'top',
        '0px'
      );
      clearTimeout(this.showNavbarTimeout);
    } else {
      // Scrolling up
      this.renderer.setStyle(
        document.querySelector('.top-navbar'),
        'top',
        '0px'
      );
      clearTimeout(this.showNavbarTimeout); // Clear the previous timeout
    }

    // Store the current scroll position
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  preview() {
    this.isEdit = false;
  }

  backBtn() {
    this.isSideBar = !this.isSideBar;
    if (this.isSideBar) {
      this.renderer.setStyle(
        document.getElementById('body'),
        'overflow',
        'hidden'
      );
    } else {
      this.renderer.setStyle(
        document.getElementById('body'),
        'overflow',
        'visible'
      );
    }
  }

  toNav() {
    this.router.navigate(['/navbar']);
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  nextDiv() {
    const targetElement = document.querySelector('.ScrollStopDiv');

    if (targetElement) {
      const offset = 20;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  }

  onFilesSelected(files: File | File[], index: number, layoutId: string) {
    const fileArray = Array.isArray(files) ? files : [files];
    const reader = new FileReader();

    fileArray.forEach((file, fileIndex) => {
      reader.onload = () => {
        const imageUrl = reader.result as string;
        this.homeLayouts.forEach((data, i) => {
          if (i === index) {
            data.image = imageUrl;
            this.hasChanges = true;
          }
        });
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    });
  }

  changeTitle(event: any, index: any) {
    this.hasChanges = true;
    this.homeLayouts[index]['title'] = event;
    
  }

  changeDescription(event: any, index: any) {
    this.hasChanges = true;
    this.homeLayouts[index]['description'] = event;
  }

  // navigate(url: any) {
  //   this.router.navigate([`${url}`]);
  // }

  changeMode() {
    this.isEdit = !this.isEdit;
  }

  onPublish() {
    this.hasChanges = false;
    this.spinner.show();

    this.service
      .postHomeLandingData(this.homeLayouts)
      .subscribe((data) => {
        if (data.message === 'success') {
       this.msgService.successToaster('Uploaded successfully');
          this.fetchData();
          this.toTop();
          this.spinner.hide();
        }
      });
  }

  sideBarToogle() {
    this.isSideBar = !this.isSideBar;
  }
}
