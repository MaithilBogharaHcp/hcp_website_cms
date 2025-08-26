import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../../environments/environment.development';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatDatepickerModule,
  MatDateRangePicker,
} from '@angular/material/datepicker';
import { DateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { DatePipe } from '@angular/common';
import { GeneralServicesService } from '../../../services/general-services.service';
import { Router } from '@angular/router';
import { ToasterService } from '../../../services/toaster.service';
import {
  CustomDateAdapter,
  WeekRangeSelectionStrategy,
} from './custom-date-adapter';
import { Layout33Component } from '../../common/layouts/layout33/layout33.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { LayoutDialogComponent } from '../../common/dialog/layout-dialog/layout-dialog.component';
import { faPen, faTrash, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditLayoutComponent } from '../../common/dialog/edit-layout/edit-layout.component';
import { FormsModule } from '@angular/forms';
import { DeleteLayoutComponent } from '../../common/dialog/delete-layout/delete-layout.component';
import { Layout4Component } from '../../common/layouts/layout4-P/layout4.component';
@Component({
  selector: 'app-press-news',
  standalone: true,
  templateUrl: './press-news.component.html',
  providers: [
    provideNativeDateAdapter(),
    DatePipe,
    ToasterService,
    MessageService,
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: WeekRangeSelectionStrategy,
    },
    {
      provide: DateAdapter,
      useClass: CustomDateAdapter,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './press-news.component.css',
  imports: [
    NgxSpinnerModule,
    FormsModule,
    TopbarComponent,
    Layout4Component,
    FooterComponent,
    Layout33Component,
    CommonModule,
    CarouselModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    ButtonModule,
    ToastModule,
    CmsTopbarComponent,
    LayoutDialogComponent,
    FontAwesomeModule,
    EditLayoutComponent,
    DeleteLayoutComponent,
  ],
})
export class PressComponent implements OnInit {
  @ViewChild('picker') picker!: MatDateRangePicker<any>;
  faPen = faPen;
  faTrash = faTrash;
  faUpDown = faUpDown;
  imageUrl = environment.image_url_server;
  pressLayouts!: any;
  isSideBar: boolean = false;
  isEdit: boolean = true; //Mode
  selectedLayout: any = null;
  isLoading = true;
  others: any;
  pressDescription: any;
  maxDate: Date;
  minDate: Date;
  formattedDate: Date | any = null;
  selectedDate: Date | any = null;
  currentPressData: any;
  filteredPressData: any[] = [];
  activeIndex = 0;
  isDateSelected = false;
  hasChanges: boolean = false;
  isEditLayoutVisible: boolean = false;
  isAddLayoutPopupVisible: boolean = false;
  isVisible: boolean = false;
  selectedLayoutToDelete:
    | {
        index: any;
      }
    | any = null;
  selectedLayoutToReplace: { index: any } | any = null;

  constructor(
    private service: GeneralServicesService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    public msgService: ToasterService
  ) {
    this.minDate = new Date(2024, 8, 23); // 23-09-2024 (Month is 0-indexed)
    this.maxDate = new Date(2025, 2, 16); // 05-01-2025 (Month is 0-indexed)
  }

  layoutArray: any[] = [
    // { layout_id: '0', image: '../../../../assets/Layouts/layout33.jpg' },
    { layout_id: '0', image: './assets/Layouts/layout33.jpg' },
  ];

  ngOnInit(): void {
    this.spinner.show();
    this.fetchData();
  }

  fetchData() {
    this.service
      .getPress(this.router.url.split('/')[2])
      .subscribe((data: any) => {
        this.filteredPressData = data.data;
        this.spinner.hide();
        this.cdr.detectChanges();
      });
  }

  onFilesSelected(files: File | File[], index: number, layoutId: string) {
    const fileArray = Array.isArray(files) ? files : [files];
    const reader = new FileReader();

    fileArray.forEach((file, fileIndex) => {
      reader.onload = () => {
        const imageUrl = reader.result as string;
        this.filteredPressData.forEach((data, index1) => {
          data.data11.forEach((layout: any, layoutIndex: any) => {
            if (layout.layout === layoutId) {
              if (layoutIndex === index) {
                layout.image = imageUrl;
                this.hasChanges = true;
              }
            }
          });
        });
        this.hasChanges = true;
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    });
  }

  onLayoutSelected(layoutId: any) {
    const selectedLayout = this.layoutArray.find(
      (layout) => layout.layout_id === layoutId.toString()
    );
    if (selectedLayout) {
      if (this.filteredPressData[0].data11) {
        this.filteredPressData[0].data11.push({
          news_id: '',
          layout: selectedLayout.layout_id,
          // image: '../../../../../assets/Layouts/layout33.jpg',
          image: './assets/Layouts/layout33.jpg',
          title: '',
          description: '',
          news_description2: '',
          link: '',
        });
        this.hasChanges = true;
      }

      this.selectedLayout = null;
      this.closeEditLayoutDialog();
    }
  }

  onFilesSelectedLayout(
    files: File | File[],
    index: number,
    layoutId: string
  ): void {
    const fileArray = Array.isArray(files) ? files : [files];
    const reader = new FileReader();

    fileArray.forEach((file, fileIndex) => {
      reader.onload = () => {
        const imageUrl = reader.result as string;

        this.filteredPressData.forEach((data, index1) => {
          data.data11.forEach((layout: any, layoutIndex: any) => {
            if (layout.layout === layoutId) {
              if (layoutIndex === index) {
                layout.image = imageUrl;
                this.hasChanges = true;
              }
            }
          });
        });
        this.hasChanges = true;
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    });
  }

  openDeleteLayoutDialog(index?: any) {
    if (index) {
      this.selectedLayoutToDelete = {
        index,
      };
      this.isVisible = !this.isVisible;
    } else {
      this.isVisible = false;
    }
  }

  onLayoutDelete() {
    const { index } = this.selectedLayoutToDelete;
    this.spinner.show();
    this.filteredPressData[0].data11.splice(index, 1);
    this.hasChanges = true;
    this.spinner.hide();
    this.isVisible = false;
  }

  openEditLayoutDialog(index?: any) {
    this.selectedLayoutToReplace = {
      index,
    };
    this.isEditLayoutVisible = !this.isEditLayoutVisible;
  }

  openAddLayoutDialog() {
    this.isAddLayoutPopupVisible = !this.isAddLayoutPopupVisible;
  }

  onLayoutReplaceSelected(event: any) {
    const { index } = this.selectedLayoutToReplace;

    const selectedLayout = this.layoutArray.find(
      (layout) => layout.layout_id === event
    );

    if (selectedLayout) {
      if (this.filteredPressData[0].data11) {
        this.filteredPressData[0].data11[index] = {
          news_id: '',
          layout: selectedLayout.layout_id,
          image: '../../../../../assets/Layouts/layout33.jpg',
          title: '',
          description: '',
          news_description2: '',
          link: '',
        };
        this.hasChanges = true;
      }

      this.selectedLayout = null;
      this.closeEditLayoutDialog();
    }
  }

  closeEditLayoutDialog() {
    this.isEditLayoutVisible = false;
    this.isAddLayoutPopupVisible = false;
  }

  changeTitle(newTitle: string, index: number) {
    this.hasChanges = true;
    this.filteredPressData[0].data11[index].title = newTitle;
  }

  changeDescription(newDescription: string, index: number) {
    this.hasChanges = true;
    this.filteredPressData[0].data11[index].description = newDescription;
  }

  changeDescription2(newDescription2: string, index: number) {
    this.hasChanges = true;
    this.filteredPressData[0].data11[index].news_description2 = newDescription2;
  }

  changeLink(newLink: string, index: number) {
    this.hasChanges = true;
    this.filteredPressData[0].data11[index].link = newLink;
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  sideBarToogle() {
    this.isSideBar = !this.isSideBar;
  }

  changeMode() {
    this.isEdit = !this.isEdit;
  }

  onPublish() {
    this.hasChanges = false;
    this.spinner.show();
    this.service.postPressPageData(this.filteredPressData).subscribe((data) => {
      if (data.message === 'success') {
        this.msgService.successToaster('Uploaded successfully');
        this.fetchData();
        this.spinner.hide();
      }
    });
  }
}
