import { Component, Renderer2 } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Router } from '@angular/router';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { Layout4Component } from '../../common/layouts/layout4-P/layout4.component';
import { Layout22Component } from '../../common/layouts/layout22/layout22.component';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { Layout27Component } from '../../common/layouts/layout27/layout27.component';
import { MessageService } from 'primeng/api';
import { ToasterService } from '../../../services/toaster.service';
import { GeneralServicesService } from '../../../services/general-services.service';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-brochures',
  standalone: true,
  templateUrl: './brochures.component.html',
  styleUrl: './brochures.component.css',
  imports: [
    Layout4Component,
    Layout22Component,
    TopbarComponent,
    CommonModule,
    CmsTopbarComponent,
    ToastModule,
    NgxSpinnerModule,
    Layout27Component,
    FooterComponent
  ],
  providers: [ToasterService, MessageService],
})
export class BrochuresComponent {
  brochuresLayouts!: any;
  imageUrl = environment.image_url_server;
  others: any;
  isSideBar: boolean = false;
  isEdit: boolean = true; //Mode
  isLoading = true;
  brochuresDescription: any;
  hasChanges: boolean = false;
  constructor(
    private service: GeneralServicesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private renderer: Renderer2,
    public msgService: ToasterService
  ) {}

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

  ngOnInit(): void {
    this.spinner.show();
    this.service.getBrochures().subscribe(
      (data) => {
        this.brochuresLayouts = data.data;
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
    this.router.navigate([`/brochures/${event}`]);
  }
  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onClickNavigation(id: string) {
    this.router.navigate([id]);
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
