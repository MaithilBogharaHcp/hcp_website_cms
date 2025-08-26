import { ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.development';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ToasterService } from '../../../services/toaster.service';
import { GeneralServicesService } from '../../../services/general-services.service';
import { Layout4Component } from '../../common/layouts/layout4-P/layout4.component';
import { Layout28Component } from '../../common/layouts/layout28/layout28.component';
import { Layout29Component } from '../../common/Layouts/layout29/layout29.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { TopbarComponent } from '../../shared/topbar/topbar.component';

@Component({
  selector: 'app-work-opportunities',
  standalone: true,
  templateUrl: './work-opportunities.component.html',
  styleUrl: './work-opportunities.component.css',
  imports: [
    Layout4Component,
    FooterComponent,
    CommonModule,
    Layout28Component,
    Layout29Component,
    MatIconModule,
    ToastModule,
    TopbarComponent,
    CmsTopbarComponent,
    NgxSpinnerModule
  ],
  providers: [ToasterService, MessageService],
})
export class WorkOpportunitiesComponent {
  isLoading = true;
  isSideBar: boolean = false;
  isEdit: boolean = true; //Mode
  imageUrl = environment.image_url_server;
  workOppLayouts!: any;
  showAdditionalContent: boolean = false;
  data!: any;
  workDescription: any;
  hasChanges: boolean = false;
  constructor(
    private service: GeneralServicesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private renderer: Renderer2,
    public msgService: ToasterService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.service.getWorkopp().subscribe(
      (data) => {
        this.workOppLayouts = data.data;
        this.isLoading = false;
        this.spinner.hide();
      },
      (error) => {
        console.error('Error', error);
        this.spinner.hide();
      }
    );
  }

  handleData(requer: any) {
    this.data = requer;
    this.showAdditionalContent = !this.showAdditionalContent;
    if (this.showAdditionalContent) {
      this.renderer.addClass(document.body, 'peopleContent');
    } else {
      this.renderer.removeClass(document.body, 'peopleContent');
    }
  }

  getGridClass() {
    return this.showAdditionalContent ? 'opacity-5' : '';
  }
  onClickNavigate(event: any) {
    this.router.navigate([`/careers/${event}`]);
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

  toNav() {
    this.router.navigate(['/navbar']);
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navToForm() {
    this.router.navigate(['/work-form']);
    this.renderer.removeClass(document.body, 'peopleContent');
    this.renderer.setStyle(
      document.getElementById('body'),
      'overflow',
      'visible'
    );
  }
  changeMode() {
    this.isEdit = !this.isEdit;
  }

  onPublish() {
    this.hasChanges = false;
    this.spinner.show();
  }

  sideBarToogle() {
    this.isSideBar = !this.isSideBar;
  }
}
