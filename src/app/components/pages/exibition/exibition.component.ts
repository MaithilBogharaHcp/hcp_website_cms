import { Component, Renderer2 } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Router } from '@angular/router';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { Layout4Component } from '../../common/layouts/layout4-P/layout4.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ToastModule } from 'primeng/toast';
import { Layout22Component } from '../../common/layouts/layout22/layout22.component';
import { Layout8Component } from '../../common/layouts/layout8-P/layout8.component';
import { Layout27Component } from '../../common/layouts/layout27/layout27.component';
import { GeneralServicesService } from '../../../services/general-services.service';
import { ToasterService } from '../../../services/toaster.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-exibition',
  standalone: true,
  templateUrl: './exibition.component.html',
  styleUrl: './exibition.component.css',
  providers: [ToasterService, MessageService],
  imports: [
    TopbarComponent,
    CommonModule,
    CmsTopbarComponent,
    Layout4Component,
    FooterComponent,
    NgxSpinnerModule,
    ToastModule,
    Layout22Component,
    Layout4Component,
    Layout8Component,
    Layout27Component,
  ],
})
export class ExibitionComponent {
  exibitionLayout!: any;
  imageUrl = environment.image_url_server;
  others: any;
  isSideBar: boolean = false;
  isEdit: boolean = true; //Mode
  isLoading: boolean = true; //Mode
  hasChanges: boolean = false;
  exhibitionsDescription: any;
  constructor(
    private service: GeneralServicesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private renderer: Renderer2,
    public msgService: ToasterService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.service.getExibition().subscribe(
      (data) => {
        this.exibitionLayout = data.data;
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
    this.router.navigate([`/exhibitions/${event}`]);
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
