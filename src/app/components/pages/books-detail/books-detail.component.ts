import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { Layout4Component } from '../../common/layouts/layout4-P/layout4.component';
import { GeneralServicesService } from '../../../services/general-services.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Layout12Component } from '../../common/layouts/layout12-P/layout12.component';
import { Layout6Component } from '../../common/layouts/layout6-P/layout6.component';
import { Layout13Component } from '../../common/layouts/layout13-P/layout13.component';
import { Layout15Component } from '../../common/layouts/layout15-P/layout15.component';
import { Layout14Component } from '../../common/layouts/layout14-P/layout14.component';
import { Layout16Component } from '../../common/layouts/layout16-P/layout16.component';
import { Layout18Component } from '../../common/layouts/layout18-p/layout18.component';
import { Layout7Component } from '../../common/layouts/layout7-P/layout7.component';
import { Layout8Component } from '../../common/layouts/layout8-P/layout8.component';
import { Layout17Component } from '../../common/layouts/layout17-P/layout17.component';
import { LayoutDialogComponent } from '../../common/dialog/layout-dialog/layout-dialog.component';
import { EditLayoutComponent } from '../../common/dialog/edit-layout/edit-layout.component';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { faPen, faTrash, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeleteLayoutComponent } from '../../common/dialog/delete-layout/delete-layout.component';
import { ToasterService } from '../../../services/toaster.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Layout31Component } from '../../common/layouts/layout31/layout31.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Layout20Component } from '../../common/layouts/layout20/layout20.component';

interface FileWithIndex {
  file: File;
  index: number;
}

@Component({
  selector: 'app-books-detail',
  standalone: true,
  imports: [
    TopbarComponent,
    CommonModule,
    LayoutDialogComponent,
    EditLayoutComponent,
    NgxSpinnerModule,
    Layout4Component,
    Layout12Component,
    Layout6Component,
    Layout13Component,
    Layout15Component,
    Layout14Component,
    Layout16Component,
    Layout18Component,
    Layout7Component,
    Layout8Component,
    Layout17Component,
    Layout31Component,
    Layout20Component,
    CmsTopbarComponent,
    FormsModule,
    FontAwesomeModule,
    DeleteLayoutComponent,
    ToastModule,
    FooterComponent,
  ],
  providers: [ToasterService, MessageService],
  templateUrl: './books-detail.component.html',
  styleUrl: './books-detail.component.css',
})
export class BooksDetailComponent {
  isLoading = true;
  bookName!: any;
  others: any;
  constructor(
    private service: GeneralServicesService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    public msgService: ToasterService
  ) {}
  draggable: boolean = true;
  faPen = faPen;
  faTrash = faTrash;
  faUpDown = faUpDown;
  books!: any[];
  isEdit: boolean = true;
  isSideBar: boolean = false;
  isAddLayoutPopupVisible: boolean = false;
  isEditLayoutVisible: boolean = false;
  isVisible: boolean = false;
  hasChanges: boolean = false;
  addedLayouts: any[] = [];
  selectedLayout: any = null;
  selectedLayoutToDelete:
    | {
        index: any;
      }
    | any = null;
  selectedLayoutToReplace: { index: any; book_image_id: any } | null = null;
  layoutArray: any[] = [
    { layout_id: '4', image: '../../../../assets/Layouts/layout4.jpg' },
    // { layout_id: '5', image: '../../../../assets/Layouts/layout5.jpg' },
    { layout_id: '7', image: '../../../../assets/Layouts/layout6.jpg' },
    { layout_id: '14', image: '../../../../assets/Layouts/layout7.jpg' },
    { layout_id: '6', image: '../../../../assets/Layouts/layout12.jpg' },
    { layout_id: '8', image: '../../../../assets/Layouts/layout13.jpg' },
    { layout_id: '10', image: '../../../../assets/Layouts/layout14.jpg' },
    { layout_id: '9', image: '../../../../assets/Layouts/layout15.jpg' },
    { layout_id: '11', image: '../../../../assets/Layouts/layout16.jpg' },
    { layout_id: '15', image: '../../../../assets/Layouts/layout17.jpg' },
    { layout_id: '12', image: '../../../../assets/Layouts/layout18.jpg' },
    { layout_id: '31', image: '../../../../assets/Layouts/layout31.jpg' },
  ];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.spinner.show();
    this.service
      .getBooksDetails(this.router.url.split('/')[2])
      .subscribe((data) => {
        this.books = data.data;
        this.spinner.hide();
      });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onLayoutSelected(layoutId: any) {
    const selectedLayout = this.layoutArray.find(
      (layout) => layout.layout_id === layoutId.toString()
    );

    if (selectedLayout) {
      let newLayout: any;
      if (layoutId === '31') {
        newLayout = {
          book_image_id: ``,
          layout_id: selectedLayout.layout_id,
          books_image: ['../../../../../assets/Layouts/layout31.jpg'],
          // books_image: ['./assets/Layouts/layout31.jpg'],
          slider: [],
          captions: [],
        };
      } else {
        newLayout = {
          book_image_id: ``,
          layout_id: selectedLayout.layout_id,
          books_image: [''],
          slider: [],
          captions: [],
        };
      }

      if (this.books.length > 0) {
        this.books.push({
          layouts: [newLayout],
        });
        this.hasChanges = true;
      }

      this.selectedLayout = null;
      this.closeEditLayoutDialog();
    }
  }

  onFilesSelected(files: File | File[], index: number, layoutId: string) {
    const fileArray = Array.isArray(files) ? files : [files];
    const reader = new FileReader();

    fileArray.forEach((file, fileIndex) => {
      reader.onload = () => {
        const imageUrl = reader.result as string;

        this.books.forEach((project, projectIndex) => {
          project.layouts.forEach((layout: any, layoutIndex: any) => {
            if (layout.layout_id === layoutId) {
              if (projectIndex === index) {
                layout.books_image[0] = imageUrl;
                this.hasChanges = true;
              }
            }
          });
        });
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    });
  }

  onFilesSelectedLayout(
    fileWithIndex: FileWithIndex,
    index: number,
    layoutId: string
  ): void {
    const file = fileWithIndex.file;
    const index1 = fileWithIndex.index;
    const reader = new FileReader();

    reader.onload = () => {
      const imageUrl = reader.result as string;

      this.books.forEach((project, projectIndex) => {
        project.layouts.forEach((layout: any, layoutIndex: any) => {
          if (layout.layout_id === layoutId) {
            if (projectIndex === index) {
              layout.books_image[index1] = imageUrl;
              this.hasChanges = true;
            }
          }
        });
      });
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  onLayoutReplaceSelected(event: any) {
    if (this.selectedLayoutToReplace) {
      const { index, book_image_id } = this.selectedLayoutToReplace;

      const selectedLayout = this.layoutArray.find(
        (layout) => layout.layout_id === event
      );
      if (selectedLayout.layout_id === '14') {
        this.books[index].layouts = [
          {
            book_image_id: book_image_id,
            layout_id: selectedLayout.layout_id,
            books_image: [],
            slider: [
              {
                image: '../../../../../assets/Layouts/layout7.jpg',
                // image: './assets/Layouts/layout7.jpg',
              },
            ],
            captions: [],
          },
        ];
      } else if (selectedLayout.layout_id === '31') {
        this.books[index].layouts = [
          {
            book_image_id: book_image_id,
            layout_id: selectedLayout.layout_id,
            books_image: ['../../../../../assets/Layouts/layout31.jpg'],
            // books_image: ['./assets/Layouts/layout31.jpg'],
            slider: [],
            captions: [],
          },
        ];
      } else {
        this.books[index].layouts = [
          {
            book_image_id: book_image_id,
            layout_id: selectedLayout.layout_id,
            books_image: [],
            slider: [],
            captions: [],
          },
        ];
      }
      this.hasChanges = true;
    }
    this.closeEditLayoutDialog();
  }

  onFilesVideoSelected(files: File | File[], index: number, layoutId: string) {
    const fileArray = Array.isArray(files) ? files : [files];
    const reader = new FileReader();

    fileArray.forEach((file, fileIndex) => {
      reader.onload = () => {
        const videoUrl = reader.result as string;

        // Update the project with the new video URL
        this.books.forEach((project, projectIndex) => {
          project.layouts.forEach((layout: any, layoutIndex: any) => {
            if (layout.layout_id === layoutId) {
              if (projectIndex === index) {
                layout.books_image[0] = videoUrl;
                this.hasChanges = true;
              }
            }
          });
        });

        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    });
  }

  openEditLayoutDialog(index?: any) {
    const book_image_id = this.books[index].layouts[0].book_image_id;

    this.selectedLayoutToReplace = {
      index,
      book_image_id,
    };
    this.isEditLayoutVisible = !this.isEditLayoutVisible;
  }

  closeEditLayoutDialog() {
    this.isEditLayoutVisible = false;
    this.isAddLayoutPopupVisible = false;
  }

  openDeleteLayoutDialog(index?: any) {
    if (index !== undefined && index !== null) {
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
    this.books.splice(index, 1);
    this.hasChanges = true;
    this.spinner.hide();
    this.isVisible = false;
  }

  onPublish() {
    this.hasChanges = false;
    this.spinner.show();

    this.service.postBooksDetailsData(this.books).subscribe((data) => {
      if (data.message === 'success') {
        this.msgService.successToaster('Uploaded successfully');
        this.fetchData();
        this.toTop();
        this.spinner.hide();
      }
    });
  }

  changeTitle(event: any) {
    this.hasChanges = true;
    this.books[event.index].books_name = event.title;
  }

  changeDescription(event: any) {
    this.hasChanges = true;
    this.books[event.index].books_description = event.description.replace(
      /Â/g,
      ''
    );
  }

  changeYear(event: any) {
    this.hasChanges = true;
    this.books[event.index].books_year = event.year;
  }

  onFilesThumbSelected(files: File | File[], index: number, layoutId: string) {
    const fileArray = Array.isArray(files) ? files : [files];
    const reader = new FileReader();

    fileArray.forEach((file, fileIndex) => {
      reader.onload = () => {
        const imageUrl = reader.result as string;
        this.books.forEach((project, projectIndex) => {
          project.books_thumbnail = imageUrl;
        });
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
      this.hasChanges = true;
    });
  }

  sideBarToogle() {
    this.isSideBar = !this.isSideBar;
  }

  changeMode() {
    this.isEdit = !this.isEdit;
  }

  openAddLayoutDialog() {
    this.isAddLayoutPopupVisible = !this.isAddLayoutPopupVisible;
  }

  onClickNavigate(id: string) {
    this.router.navigate([id]);
  }
  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
