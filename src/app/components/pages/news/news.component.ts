import { Component, Renderer2 } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { Router } from '@angular/router';
import { GeneralServicesService } from '../../../services/general-services.service';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { ToastModule } from 'primeng/toast';
import { ToasterService } from '../../../services/toaster.service';
import { MessageService } from 'primeng/api';
import { Layout4Component } from '../../common/layouts/layout4-P/layout4.component';
import { Layout21Component } from '../../common/layouts/layout21/layout21.component';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  providers: [ToasterService, MessageService],
  imports: [
    TopbarComponent,
    CommonModule,
    CmsTopbarComponent,
    Layout4Component,
    FooterComponent,
    NgxSpinnerModule,
    ToastModule,
    Layout21Component,
    FooterComponent,
  ],
})
export class NewsComponent {
  isEdit: boolean = true;
  imageUrl = environment.image_url_server;
  newsLayouts!: any;
  isSideBar: boolean = false;
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
    this.service.getNews().subscribe(
      (data) => {
        this.newsLayouts = data.data;
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
