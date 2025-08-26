import { Component, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Layout4Component } from '../../common/layouts/layout4-P/layout4.component';
import { Layout21Component } from '../../common/layouts/layout21/layout21.component';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { GeneralServicesService } from '../../../services/general-services.service';
import { ToasterService } from '../../../services/toaster.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-features',
  standalone: true,
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
  providers: [ToasterService, MessageService],
  imports: [
    TopbarComponent,
    CommonModule,
    CmsTopbarComponent,
    Layout4Component,
    Layout21Component,
    FooterComponent,
    NgxSpinnerModule,
    ToastModule,
  ],
})
export class FeaturesComponent implements OnInit {
  imageUrl = environment.image_url_server;
  featureLayouts!: any;
  others: any;
  isSideBar: boolean = false;
  isEdit: boolean = true;
  hasChanges: boolean = false;
  isLoading = true;
  constructor(
    private service: GeneralServicesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private renderer: Renderer2,
    public msgService: ToasterService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.service.getFeatures().subscribe(
      (data) => {
        this.featureLayouts = data.data;
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
  onClickNavigate(id: string) {
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

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
