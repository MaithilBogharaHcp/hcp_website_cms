import { ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { environment } from '../../../../environments/environment.development';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Layout4Component } from '../../common/layouts/layout4-P/layout4.component';
import { Layout19Component } from '../../common/layouts/layout19/layout19.component';
import { Layout17Component } from '../../common/layouts/layout17-P/layout17.component';
import { Layout8Component } from '../../common/layouts/layout8-P/layout8.component';
import { Layout13Component } from '../../common/layouts/layout13-P/layout13.component';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { Layout12Component } from '../../common/layouts/layout12-P/layout12.component';
import { Layout6Component } from '../../common/layouts/layout6-P/layout6.component';
import { Layout15Component } from '../../common/layouts/layout15-P/layout15.component';
import { Layout14Component } from '../../common/layouts/layout14-P/layout14.component';
import { Layout16Component } from '../../common/layouts/layout16-P/layout16.component';
import { Layout18Component } from '../../common/layouts/layout18-p/layout18.component';
import { Layout31Component } from '../../common/layouts/layout31/layout31.component';
import { GeneralServicesService } from '../../../services/general-services.service';
import { ToasterService } from '../../../services/toaster.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { LayoutDialogComponent } from '../../common/dialog/layout-dialog/layout-dialog.component';
import { CommonModule } from '@angular/common';
import { DeleteLayoutComponent } from '../../common/dialog/delete-layout/delete-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditLayoutComponent } from '../../common/dialog/edit-layout/edit-layout.component';
import { faPen, faTrash, faUpDown } from '@fortawesome/free-solid-svg-icons';

interface FileWithIndex {
  file: File;
  index: number;
}

@Component({
  selector: 'app-aboutus',
  standalone: true,
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css',
  imports: [
    FooterComponent,
    TopbarComponent,
    CommonModule,
    CmsTopbarComponent,
    NgxSpinnerModule,
    Layout4Component,
    Layout12Component,
    Layout6Component,
    Layout13Component,
    Layout15Component,
    Layout14Component,
    Layout16Component,
    Layout18Component,
    Layout8Component,
    Layout17Component,
    Layout31Component,
    Layout19Component,
    ToastModule,
    LayoutDialogComponent,
    DeleteLayoutComponent,
    FontAwesomeModule,
    EditLayoutComponent,
  ],
  providers: [ToasterService, MessageService],
})
export class AboutusComponent implements OnInit {
  faPen = faPen;
  faTrash = faTrash;
  faUpDown = faUpDown;

  isLoading = true;
  isSideBar: boolean = false;
  isEdit: boolean = true; //Mode
  imageUrl = environment.image_url_server;
  aboutLayouts!: any;
  aboutDescription: any;
  hasChanges: boolean = false;
  isAddLayoutPopupVisible: boolean = false;
  isEditLayoutVisible: boolean = false;
  selectedLayout: any = null;
  isVisible: boolean = false;
  selectedLayoutToDelete:
    | {
        index: any;
      }
    | any = null;
  selectedLayoutToReplace: { index: any; id: any } | null = null;

  constructor(
    private service: GeneralServicesService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    public msgService: ToasterService
  ) {}

  layoutArray: any[] = [
    { layout_id: '4', image: '../../../../assets/Layouts/layout4.jpg' },
    { layout_id: '7', image: '../../../../assets/Layouts/layout6.jpg' },
    { layout_id: '6', image: '../../../../assets/Layouts/layout12.jpg' },
    { layout_id: '8', image: '../../../../assets/Layouts/layout13.jpg' },
    { layout_id: '10', image: '../../../../assets/Layouts/layout14.jpg' },
    { layout_id: '9', image: '../../../../assets/Layouts/layout15.jpg' },
    { layout_id: '11', image: '../../../../assets/Layouts/layout16.jpg' },
    { layout_id: '17', image: '../../../../assets/Layouts/layout17.jpg' },
    { layout_id: '12', image: '../../../../assets/Layouts/layout18.jpg' },
    { layout_id: '31', image: '../../../../assets/Layouts/layout31.jpg' },
  ];

  ngOnInit(): void {
    this.spinner.show();
   this.fetchData()
  }

  fetchData(){
    this.service.getAboutUs().subscribe(
      (data) => {
        this.aboutLayouts = data.data;
        this.isLoading = false;
        this.spinner.hide();
      },
      (error) => {
        console.error('Error', error);
        this.spinner.hide();
      }
    );
  }
  
  onFilesSelected(files: File | File[], index: number, layoutId: string) {
    const fileArray = Array.isArray(files) ? files : [files];
    const reader = new FileReader();

    fileArray.forEach((file, fileIndex) => {
      reader.onload = () => {
        const imageUrl = reader.result as string;

        this.aboutLayouts.forEach((layouts: any, i: any) => {
          if (layouts.layoutid === layoutId) {
            if (i === index) {
              layouts.image[0] = imageUrl;
              this.hasChanges = true;
            }
          }
        });
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
      if (layoutId === '31') {
        this.aboutLayouts.push({
          id: ``,
          layoutid: selectedLayout.layout_id,
          image: [''],
          title: '',
          description: '',
        });
      } else {
        this.aboutLayouts.push({
          id: ``,
          layoutid: selectedLayout.layout_id,
          image: [''],
          title: '',
          description: '',
        });
      }
      this.hasChanges = true;
      this.selectedLayout = null;
      this.closeEditLayoutDialog();
    }
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

      this.aboutLayouts.forEach((layouts: any, i: any) => {
        if (layouts.layoutid === layoutId) {
          if (i === index) {
            layouts.image[index1] = imageUrl;
            this.hasChanges = true;
          }
        }
      });
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  onFilesVideoSelected(files: File | File[], index: number, layoutId: string) {
    const fileArray = Array.isArray(files) ? files : [files];
    const reader = new FileReader();

    fileArray.forEach((file, fileIndex) => {
      reader.onload = () => {
        const videoUrl = reader.result as string;

        this.aboutLayouts.forEach((layouts: any, i: any) => {
          if (layouts.layoutid === layoutId) {
            if (i === index) {
              layouts.image[0] = videoUrl;
              this.hasChanges = true;
            }
          }
        });

        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    });
  }

  onLayoutReplaceSelected(event: any) {
    if (this.selectedLayoutToReplace) {
      const { index, id } = this.selectedLayoutToReplace;

      const selectedLayout = this.layoutArray.find(
        (layout) => layout.layout_id === event
      );
      if (selectedLayout.layout_id === '31') {
        this.aboutLayouts[index] = {
          id: id,
          layoutid: selectedLayout.layout_id,
          image: [''],
          title: '',
          description: '',
        };
      } else {
        this.aboutLayouts[index] = {
          id: id,
          layoutid: selectedLayout.layout_id,
          image: [''],
          title: '',
          description: '',
        };
      }
      this.hasChanges = true;
    }
    this.closeEditLayoutDialog();
  }

  closeEditLayoutDialog() {
    this.isEditLayoutVisible = false;
    this.isAddLayoutPopupVisible = false;
  }

  openAddLayoutDialog() {
    this.isAddLayoutPopupVisible = !this.isAddLayoutPopupVisible;
  }

  openEditLayoutDialog(index?: any) {
    const id = this.aboutLayouts[index].id;

    this.selectedLayoutToReplace = {
      index,
      id,
    };
    this.isEditLayoutVisible = !this.isEditLayoutVisible;
  }

  onLayoutDelete() {
    const { index } = this.selectedLayoutToDelete;
    this.spinner.show();
    this.aboutLayouts.splice(index, 1);
    this.hasChanges = true;
    this.spinner.hide();
    this.isVisible = false;
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

  changeTitle(event: any) {
    this.hasChanges = true;
    this.aboutLayouts[1].title = event;
  }

  changeDescription(event: any) {
    this.hasChanges = true;
    this.aboutLayouts[1].description = event.replace(
      /Â/g,
      ''
    );
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
    this.hasChanges = false;
    this.spinner.show();

    this.service
      .postAboutPageData(this.aboutLayouts)
      .subscribe((data) => {
        if (data.message === 'success') {
       this.msgService.successToaster('Uploaded successfully');
          this.fetchData();
          this.toTop();
          this.spinner.hide();
        }else{
          this.spinner.hide();
        }
      });
  }

  sideBarToogle() {
    this.isSideBar = !this.isSideBar;
  }
}
