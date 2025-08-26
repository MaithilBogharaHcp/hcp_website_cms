import { Component, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Layout4Component } from '../../common/layouts/layout4-P/layout4.component';
import { Layout21Component } from '../../common/layouts/layout21/layout21.component';
import { Layout22Component } from '../../common/layouts/layout22/layout22.component';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { ToastModule } from 'primeng/toast';
import { Layout27Component } from '../../common/layouts/layout27/layout27.component';
import { GeneralServicesService } from '../../../services/general-services.service';
import { ToasterService } from '../../../services/toaster.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-books',
  standalone: true,
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
  imports: [
    Layout4Component,
    Layout21Component,
    Layout22Component,
    TopbarComponent,
    CommonModule,
    CmsTopbarComponent,
    NgxSpinnerModule,
    ToastModule,
    Layout21Component,
    Layout4Component,
    FooterComponent,
    Layout27Component,
  ],
  providers: [ToasterService, MessageService],
})
export class BooksComponent implements OnInit {
  booksLayouts!: any;
  imageUrl = environment.image_url_server;
  isSideBar: boolean = false;
  isEdit: boolean = true; //Mode
  isLoading: boolean = true; //Mode
  others: any[] = [];
  hasChanges: boolean = false;
  booksDescription: any;
  constructor(
    private service: GeneralServicesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private renderer: Renderer2,
    public msgService: ToasterService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.service.getBooks().subscribe(
      (data) => {
        this.booksLayouts = data.data;
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
