import { ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Layout4Component } from '../../common/layouts/layout4-P/layout4.component';
import { Layout2Component } from '../../common/layouts/layout2/layout2.component';
import { ToasterService } from '../../../services/toaster.service';
import { MessageService } from 'primeng/api';
import { CoverComponent } from '../../shared/cover/cover.component';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { MatIconModule } from '@angular/material/icon';
import { ToastModule } from 'primeng/toast';
import { GeneralServicesService } from '../../../services/general-services.service';

@Component({
  selector: 'app-research-publication',
  standalone: true,
  imports: [
    Layout4Component,
    Layout2Component,
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
  templateUrl: './research-publication.component.html',
  styleUrl: './research-publication.component.css',
})
export class ResearchPublicationComponent {
  isLoading = true;
  isScrolling: boolean = true;
  scrollTimeout: any; // Declare scrollTimeout property
  lastScrollTop: number = 0;
  isSideBar: boolean = false;
  isEdit: boolean = true; //Mode
  showNavLogo: boolean = false; //Logo toggle
  reseachPubLayouts: any[] = []; // Array of architectureLayouts
  hasChanges: boolean = false;
  constructor(
    private service: GeneralServicesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private renderer: Renderer2,
    public msgService: ToasterService,
    private cdr: ChangeDetectorRef
  ) {}

  cities: any;
  id!: string;
  selectedCity: any;
  selectedDate: Date | null = null; // Initialize to null
  reseachPubDescription: any;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.spinner.show();
    this.service.getResearchAndPublicationPageData().subscribe(
      (response) => {
        this.reseachPubLayouts = response.data;
        this.isLoading = false;
        this.spinner.hide();
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching architecture page data:', error);
        this.spinner.hide();
        this.cdr.detectChanges();
      }
    );
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

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigate(url: any) {
    this.router.navigate([`${url}`]);
  }

  onFilesSelected(files: File | File[], index: number, layoutId: string) {
    const fileArray = Array.isArray(files) ? files : [files];
    const reader = new FileReader();

    fileArray.forEach((file, fileIndex) => {
      reader.onload = () => {
        const imageUrl = reader.result as string;
        this.reseachPubLayouts.forEach((data, i) => {
          if (layoutId === data.rp_layout_id) {
            data.rp_image_path = imageUrl;
            this.hasChanges = true;
          } else {
            if (i === index) {
              data.rp_image_path = imageUrl;
              this.hasChanges = true;
            }
          }
        });
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    });
  }

  changeTitle(event: any, index: any) {
    this.hasChanges = true;
    this.reseachPubLayouts[index]['rp_title'] = event;
  }

  changeDescription(event: any, index: any) {
    this.hasChanges = true;
    this.reseachPubLayouts[index]['rp_description'] = event;
  }

  changeMode() {
    this.isEdit = !this.isEdit;
  }

  onPublish() {
    this.hasChanges = false;
    this.spinner.show();

    this.service
      .postResearchAndPublicationData(this.reseachPubLayouts)
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
