import { ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ToasterService } from '../../../services/toaster.service';
import { GeneralServicesService } from '../../../services/general-services.service';
import { Layout4Component } from '../../common/layouts/layout4-P/layout4.component';
import { Layout19Component } from '../../common/layouts/layout19/layout19.component';
import { Layout6Component } from '../../common/layouts/layout6-P/layout6.component';
import { Layout13Component } from '../../common/layouts/layout13-P/layout13.component';
import { Layout15Component } from '../../common/layouts/layout15-P/layout15.component';
import { Layout12Component } from '../../common/layouts/layout12-P/layout12.component';
import { Layout14Component } from '../../common/layouts/layout14-P/layout14.component';
import { Layout17Component } from '../../common/layouts/layout17-P/layout17.component';
import { Layout27Component } from '../../common/layouts/layout27/layout27.component';
import { Layout16Component } from '../../common/layouts/layout16-P/layout16.component';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { Layout18Component } from '../../common/layouts/layout18-p/layout18.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Layout31Component } from '../../common/layouts/layout31/layout31.component';
import { CommonModule } from '@angular/common';
import { DeleteLayoutComponent } from '../../common/dialog/delete-layout/delete-layout.component';
import { LayoutDialogComponent } from '../../common/dialog/layout-dialog/layout-dialog.component';
import { EditLayoutComponent } from '../../common/dialog/edit-layout/edit-layout.component';
import { faPen, faTrash, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface FileWithIndex {
  file: File;
  index: number;
}

@Component({
  selector: 'app-communications',
  standalone: true,
  imports: [
    CmsTopbarComponent,
    TopbarComponent,
    NgxSpinnerModule,
    Layout4Component,
    Layout19Component,
    Layout6Component,
    Layout13Component,
    Layout15Component,
    Layout12Component,
    Layout14Component,
    Layout16Component,
    Layout17Component,
    Layout18Component,
    Layout27Component,
    Layout31Component,
    FooterComponent,
    ToastModule,
    CommonModule,
    DeleteLayoutComponent,
    LayoutDialogComponent,
    EditLayoutComponent,
    FontAwesomeModule,
  ],
  providers: [ToasterService, MessageService],
  templateUrl: './communications.component.html',
  styleUrl: './communications.component.css',
})
export class CommunicationsComponent implements OnInit {
  imageUrl = environment.image_url_server;
  isLoading = true;
  isScrolling: boolean = true;
  scrollTimeout: any; // Declare scrollTimeout property
  lastScrollTop: number = 0;
  isSideBar: boolean = false;
  isEdit: boolean = true; //Mode
  showNavLogo: boolean = false; //Logo toggle
  communicationsLayouts!: any;
  selectedDate: Date | null = null; // Initialize to null
  communicationsDescription: any;
  hasChanges: boolean = false;
  isAddLayoutPopupVisible: boolean = false;
  isEditLayoutVisible: boolean = false;
  isVisible: boolean = false;
  selectedLayout: any = null;
  selectedLayoutToDelete:
    | {
        index: any;
      }
    | any = null;
  selectedLayoutToReplace: { index: any; id: any } | null = null;
  faPen = faPen;
  faTrash = faTrash;
  faUpDown = faUpDown;

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
    { layout_id: '32', image: '../../../../assets/Layouts/layout31.jpg' },
  ];

  ngOnInit(): void {
    this.spinner.show();
    this.fetchData();
    this.toTop()
  }

   fetchData() {
      this.service.getCommunicationLandingPageData().subscribe(
      (response) => {
        this.communicationsLayouts = response.data;
        this.isLoading = false;
        this.spinner.hide();
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching architecture page data:', error);
        this.spinner.hide();
        this.cdr.detectChanges();
      }
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

  onLayoutSelected(layoutId: any) {
    const selectedLayout = this.layoutArray.find(
      (layout) => layout.layout_id === layoutId.toString()
    );

    if (selectedLayout) {
      if (layoutId === '32') {
        this.communicationsLayouts.push({
          id: ``,
          title: '',
          description: '',
          layoutid: selectedLayout.layout_id,
          image: ['../../../../../assets/Layouts/layout31.jpg'],
        });
      } else {
        this.communicationsLayouts.push({
          id: ``,
          title: '',
          description: '',
          layoutid: selectedLayout.layout_id,
          image: [''],
        });
      }

      if (this.communicationsLayouts.length > 0) {
        this.hasChanges = true;
      }

      this.selectedLayout = null;
      this.closeEditLayoutDialog();
    }
  }

  onLayoutReplaceSelected(event: any) {
    if (this.selectedLayoutToReplace) {
      const { index, id } = this.selectedLayoutToReplace;

      const selectedLayout = this.layoutArray.find(
        (layout) => layout.layout_id === event
      );
      if (selectedLayout.layout_id === '32') {
        this.communicationsLayouts[index] = {
          id: id,
          title: '',
          description: '',
          layoutid: selectedLayout.layout_id,
          image: ['../../../../../assets/Layouts/layout31.jpg'],
        };
      } else {
        this.communicationsLayouts[index] = {
          id: id,
          title: '',
          description: '',
          layoutid: selectedLayout.layout_id,
          image: [''],
        };
      }
      this.hasChanges = true;
    }
    this.closeEditLayoutDialog();
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

      this.communicationsLayouts.forEach((project: any, projectIndex: any) => {
        if (project.layoutid === layoutId) {
          if (projectIndex === index) {
            project.image[index1] = imageUrl;
            this.hasChanges = true;
          }
        }
      });
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  onFilesSelected(files: File | File[], index: number, layoutId: string) {
    const fileArray = Array.isArray(files) ? files : [files];
    const reader = new FileReader();

    fileArray.forEach((file, fileIndex) => {
      reader.onload = () => {
        const imageUrl = reader.result as string;

        this.communicationsLayouts.forEach(
          (project: any, projectIndex: any) => {
            if (project.layoutid === layoutId) {
              if (projectIndex === index) {
                project.image[0] = imageUrl;
                this.hasChanges = true;
              }
            }
          }
        );
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    });
  }

  onFilesVideoSelected(files: File | File[], index: number, layoutId: string) {
    const fileArray = Array.isArray(files) ? files : [files];
    const reader = new FileReader();

    fileArray.forEach((file, fileIndex) => {
      reader.onload = () => {
        const videoUrl = reader.result as string;

        // Update the project with the new video URL
        this.communicationsLayouts.forEach(
          (project: any, projectIndex: any) => {
            if (project.layoutid === layoutId) {
              if (projectIndex === index) {
                project.image[0] = videoUrl;
                this.hasChanges = true;
              }
            }
          }
        );

        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    });
  }

  openEditLayoutDialog(index?: any) {
    const id = this.communicationsLayouts[index].id;

    this.selectedLayoutToReplace = {
      index,
      id,
    };
    this.isEditLayoutVisible = !this.isEditLayoutVisible;
  }

  changeTitle(event: any) {
    this.hasChanges = true;
    this.communicationsLayouts[1].title = event;
  }

  changeDescription(event: any) {
    this.hasChanges = true;
    this.communicationsLayouts[1].description = event.replace(/Â/g, '');
  }

  openAddLayoutDialog() {
    this.isAddLayoutPopupVisible = !this.isAddLayoutPopupVisible;
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
    this.communicationsLayouts.splice(index, 1);
    this.hasChanges = true;
    this.spinner.hide();
    this.isVisible = false;
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

    this.service
      .postCommunicationPageData(this.communicationsLayouts)
      .subscribe((data) => {
        if (data.message === 'success') {
       this.msgService.successToaster('Uploaded successfully');
          this.fetchData();
          this.toTop();
          this.spinner.hide();
        } else {
          this.msgService.errorToaster(
            'Please add communications image or name.'
          );
          this.fetchData();
          this.spinner.hide();
        }
      });
  }
}
