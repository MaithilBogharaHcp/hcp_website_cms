import { Component, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Router } from '@angular/router';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { GeneralServicesService } from '../../../services/general-services.service';
import { Layout22Component } from '../../common/layouts/layout22/layout22.component';
import { Layout4Component } from '../../common/layouts/layout4-P/layout4.component';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { ToastModule } from 'primeng/toast';
import { ToasterService } from '../../../services/toaster.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-outreach',
  standalone: true,
  templateUrl: './outreach.component.html',
  styleUrl: './outreach.component.css',
  providers: [ToasterService, MessageService],
  imports: [
    Layout22Component,
    TopbarComponent,
    CommonModule,
    CmsTopbarComponent,
    Layout4Component,
    FooterComponent,
    NgxSpinnerModule,
    ToastModule,
  ],
})
export class OutreachComponent implements OnInit {
  isEdit: boolean = true;
  outreachLayout!: any;
  imageUrl = environment.image_url_server;
  others: any;
  isSideBar: boolean = false;
  hasChanges: boolean = false;
  isLoading: boolean = true; //Mode
  constructor(
    private service: GeneralServicesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private renderer: Renderer2,
    public msgService: ToasterService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.service.getOutreach().subscribe(
      (data) => {
        this.outreachLayout = data.data;
        this.isLoading = false;
        this.spinner.hide();
      },
      (error) => {
        console.error('Error', error);
        this.spinner.hide();
      }
    );
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  onClickNavigate(event: any) {
    this.router.navigate([`/outreach/${event}`]);
  }

  onClickNavigation(id: string) {
    this.router.navigate([id]);
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
