import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../../environments/environment.development';
import { Layout4Component } from '../../common/layouts/layout4-P/layout4.component';
import { Layout21Component } from '../../common/layouts/layout21/layout21.component';
import { Layout24Component } from '../../common/layouts/layout24/layout24.component';
import { Layout27Component } from '../../common/layouts/layout27/layout27.component';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToasterService } from '../../../services/toaster.service';
import { GeneralServicesService } from '../../../services/general-services.service';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-research',
  standalone: true,
  templateUrl: './research.component.html',
  styleUrl: './research.component.css',
  imports: [
    Layout4Component,
    Layout21Component,
    NgxSpinnerModule,
    Layout24Component,
    Layout27Component,
    TopbarComponent,
    CommonModule,
    CmsTopbarComponent,
    ToastModule,
    FooterComponent
  ],
  providers: [ToasterService, MessageService],
})
export class ResearchComponent {
  isLoading = true;
  imageUrl = environment.image_url_server;
  researchLayouts!: any;
  others: any;
  isSideBar: boolean = false;
  isEdit: boolean = true; //Mode
  gapInpx = (23 * window.innerWidth) / 1920 + 'px';
  researchDescription: any;
  hasChanges: boolean = false;

  constructor(
    private service: GeneralServicesService,
       private router: Router,
       private spinner: NgxSpinnerService,
       private renderer: Renderer2,
       public msgService: ToasterService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.service.getResearch().subscribe(
      (data) => {
        this.researchLayouts = data.data;
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

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
