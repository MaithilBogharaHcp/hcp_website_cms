import { ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { GeneralServicesService } from '../../../services/general-services.service';
import { ToasterService } from '../../../services/toaster.service';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { Layout2Component } from '../../common/layouts/layout2/layout2.component';
import { MatIconModule } from '@angular/material/icon';
import { ToastModule } from 'primeng/toast';
import { Layout4Component } from '../../common/layouts/layout4-P/layout4.component';
import { Layout29Component } from '../../common/Layouts/layout29/layout29.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-student-internship',
  standalone: true,
  templateUrl: './student-internship.component.html',
  styleUrl: './student-internship.component.css',
  imports: [
    TopbarComponent,
    CmsTopbarComponent,
    NgxSpinnerModule,
    Layout2Component,
    MatIconModule,
    ToastModule,
    Layout4Component,
    Layout29Component,
    FooterComponent
  ],
})
export class StudentInternshipComponent {
  constructor(
    private service: GeneralServicesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private renderer: Renderer2,
    public msgService: ToasterService,
    private cdr: ChangeDetectorRef
  ) {}
  studentDescription: any;
  isSideBar: boolean = false;
  isEdit: boolean = true; //Mode
  studentLayouts!: any;
  isLoading = true;
  hasChanges: boolean = false;

  ngOnInit(): void {
    this.spinner.show();
    this.service.getStudent_Inetrn().subscribe(
      (data) => {
        this.studentLayouts = data.data;
        for (let student of this.studentLayouts) {
        }
        this.isLoading = false;
        this.spinner.hide();
      },
      (error) => {
        console.error('Error', error);
        this.spinner.hide();
      }
    );
  }

  onClickNavigate(id: any) {
    this.router.navigate([`/${id}`]);
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
