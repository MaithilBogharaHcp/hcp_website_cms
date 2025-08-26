import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { FooterComponent } from '../../shared/footer/footer.component';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { GeneralServicesService } from '../../../services/general-services.service';
import { ToasterService } from '../../../services/toaster.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
  providers: [ToasterService, MessageService],
  imports: [
    NgxSpinnerModule,
    FooterComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ToastModule,
    TopbarComponent,
    CmsTopbarComponent,
    CommonModule,
    FormsModule,
  ],
})
export class ContactUsComponent implements OnInit {
  constructor(
    private service: GeneralServicesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private renderer: Renderer2,
    public msgService: ToasterService
  ) {}
  isSideBar: boolean = false;
  isEdit: boolean = true; //Mode
  ContactUsDescription: any;
  contactUsData: any;
  hasChanges: boolean = false;
  imageUrl = environment.image_url_server;

  isBase64(imagePath: string | null): boolean {
    return imagePath ? imagePath.startsWith('data:image/') : false;
  }

  ngOnInit(): void {
    this.spinner.show();
    this.fetchData();
  }

  fetchData() {
    this.service.getContactUs().subscribe(
      (data) => {
        this.contactUsData = data.data;
        this.spinner.hide();
      },
      (error) => {
        console.error('Error', error);
        this.spinner.hide();
      }
    );
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onClckNavigate() {
    this.router.navigate(['/student-internships']);
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

  changeMode() {
    this.isEdit = !this.isEdit;
  }

  onPublish() {
    this.spinner.show();
  }

  sideBarToogle() {
    this.isSideBar = !this.isSideBar;
  }
}
