import { Component, Renderer2 } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Router } from '@angular/router';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { Layout23Component } from '../../common/layouts/layout23/layout23.component';
import { Layout19Component } from '../../common/layouts/layout19/layout19.component';
import { Layout8Component } from '../../common/layouts/layout8-P/layout8.component';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { GeneralServicesService } from '../../../services/general-services.service';
import { ToasterService } from '../../../services/toaster.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-exibition-details',
  standalone: true,
  templateUrl: './exibition-details.component.html',
  styleUrl: './exibition-details.component.css',
  providers: [ToasterService, MessageService],
  imports: [
    TopbarComponent,
    CommonModule,
    CmsTopbarComponent,
    FooterComponent,
    Layout23Component,
    Layout19Component,
    NgxSpinnerModule,
    Layout8Component,
    ToastModule,
  ],
})
export class ExibitionDetailsComponent {
  constructor(
    private service: GeneralServicesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private renderer: Renderer2,
    public msgService: ToasterService
  ) {}
  exibitionDetails!: any;
  others: any;
  isSideBar: boolean = false;
  isEdit: boolean = true; //Mode
  isLoading = true;
  hasChanges: boolean = false;

  ngOnInit(): void {
    this.spinner.show();
    this.service.getExibitionDetails(this.router.url.split('/')[2]).subscribe(
      (data) => {
        this.exibitionDetails = data.data;
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
}
