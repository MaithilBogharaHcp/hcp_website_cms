import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { GeneralServicesService } from '../../../services/general-services.service';
import { ToasterService } from '../../../services/toaster.service';
import { Layout19Component } from '../../common/layouts/layout19/layout19.component';
import { Layout24Component } from '../../common/layouts/layout24/layout24.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';

@Component({
  selector: 'app-brochures-details',
  standalone: true,
  templateUrl: './brochures-details.component.html',
  styleUrl: './brochures-details.component.css',
  imports: [
    Layout19Component,
    Layout24Component,
    NgxSpinnerModule,
    ToastModule,
    TopbarComponent,
    CmsTopbarComponent,
    FooterComponent,
  ],
  providers: [ToasterService, MessageService],
})
export class BrochuresDetailsComponent implements OnInit {
  constructor(
    private service: GeneralServicesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private renderer: Renderer2,
    public msgService: ToasterService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  brochuresDetails!: any;
  hasChanges: boolean = false;
  others: any;
  isSideBar: boolean = false;
  isEdit: boolean = true; //Mode
  isLoading = true;

  ngOnInit(): void {
    this.spinner.show();
    this.service.getBrochuresDetails(this.router.url.split('/')[2]).subscribe(
      (data) => {
        this.brochuresDetails = data.data;
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
  toTop() {
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
}
