import { ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { GeneralServicesService } from '../../../services/general-services.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToasterService } from '../../../services/toaster.service';
import { faPen, faTrash, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { Layout9Component } from '../../common/layouts/layout9-C/layout9.component';
import { Layout10Component } from '../../common/layouts/layout10-C/layout10.component';
import { Layout11Component } from '../../common/layouts/layout11-C/layout11.component';
import { Layout30Component } from '../../common/layouts/layout30/layout30.component';
import { LayoutDialogComponent } from '../../common/dialog/layout-dialog/layout-dialog.component';
import { ToastModule } from 'primeng/toast';
import { EditLayoutComponent } from '../../common/dialog/edit-layout/edit-layout.component';
import { DeleteLayoutComponent } from '../../common/dialog/delete-layout/delete-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { FooterComponent } from '../../shared/footer/footer.component';

interface FileWithIndex {
  file: File;
  index: number;
}

@Component({
  selector: 'app-urban-landing-page',
  standalone: true,
  templateUrl: './urban-landing-page.component.html',
  styleUrl: './urban-landing-page.component.css',
  imports: [
    TopbarComponent,
    NgxSpinnerModule,
    CmsTopbarComponent,
    Layout9Component,
    Layout10Component,
    Layout11Component,
    Layout30Component,
    LayoutDialogComponent,
    ToastModule,
    EditLayoutComponent,
    DeleteLayoutComponent,
    FontAwesomeModule,
    CommonModule,
    FooterComponent
  ],
  providers: [ToasterService, MessageService],
})
export class UrbanLandingPageComponent implements OnInit {
  constructor(
    private service: GeneralServicesService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    public msgService: ToasterService
  ) {
    this.ur = 'ur';
  }
  ur: any;
  urbanisamLayouts: any[] = [];
  customGap: string = '';
  isEdit: boolean = true; // Mode
  isSideBar: boolean = false;
  data!: any;
  hasChanges: boolean = false;
  selectedLayout: any = null;
  isAddLayoutPopupVisible: boolean = false;
  isEditLayoutVisible: boolean = false;
  isVisible: boolean = false;
  selectedLayoutToReplace: { index: any; ur_landing_page_id: any } | null =
    null;
  selectedLayoutToDelete:
    | {
        index: any;
      }
    | any = null;

  faPen = faPen;
  faTrash = faTrash;
  faUpDown = faUpDown;

  layoutArray: any[] = [
    { layout_id: '9', image: '../../../../assets/Layouts/layout9.jpg' },
    { layout_id: '10', image: '../../../../assets/Layouts/layout10.jpg' },
    { layout_id: '11', image: '../../../../assets/Layouts/layout11.jpg' },
    { layout_id: '30', image: '../../../../assets/Layouts/layout30.jpg' },
  ];

  ngOnInit(): void {
    this.customGap = (23 * window.innerWidth) / 1920 + 'px';
    this.fetchData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  fetchData(): void {
    this.service.getUrbanismLandingPageData().subscribe(
      (response) => {
        this.urbanisamLayouts = response.data;
        this.spinner.hide();
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching urbanism page data:', error);
        this.spinner.hide();
        this.cdr.detectChanges();
      }
    );
  }

  onLayoutSelected(layoutId: any) {
    const selectedLayout = this.layoutArray.find(
      (layout) => layout.layout_id === layoutId.toString()
    );

    if (selectedLayout) {
      if (this.urbanisamLayouts.length > 0) {
        if (layoutId === '9' || layoutId === '10') {
          this.urbanisamLayouts.push({
            ur_landing_page_id: ``,
            ur_layout_id: selectedLayout.layout_id,
            images: [
              {
                ur_project_name: '',
                ur_image_path: '',
              },
              {
                ur_project_name: '',
                ur_image_path: '',
              },
              {
                ur_project_name: '',
                ur_image_path: '',
              },
              {
                ur_project_name: '',
                ur_image_path: '',
              },
            ],
          });
        } else if (layoutId === '11' || layoutId === '30') {
          this.urbanisamLayouts.push({
            ur_landing_page_id: ``,
            ur_layout_id: selectedLayout.layout_id,
            images: [
              {
                ur_project_name: '',
                ur_image_path: '',
              },
              {
                ur_project_name: '',
                ur_image_path: '',
              },
            ],
          });
        }
        this.hasChanges = true;
      }

      this.selectedLayout = null;
      this.closeEditLayoutDialog();
    }
  }

  onLayoutReplaceSelected(event: any) {
    if (this.selectedLayoutToReplace) {
      const { index, ur_landing_page_id } = this.selectedLayoutToReplace;

      const selectedLayout = this.layoutArray.find(
        (layout) => layout.layout_id === event
      );

      if (
        selectedLayout.layout_id === '9' ||
        selectedLayout.layout_id === '10'
      ) {
        this.urbanisamLayouts[index] = {
          ur_landing_page_id: ur_landing_page_id,
          ur_layout_id: selectedLayout.layout_id,
          images: [
            {
              ur_project_name: '',
              ur_image_path: '',
            },
            {
              ur_project_name: '',
              ur_image_path: '',
            },
            {
              ur_project_name: '',
              ur_image_path: '',
            },
            {
              ur_project_name: '',
              ur_image_path: '',
            },
          ],
        };
      } else if (
        selectedLayout.layout_id === '11' ||
        selectedLayout.layout_id === '30'
      ) {
        this.urbanisamLayouts[index] = {
          ur_landing_page_id: ur_landing_page_id,
          ur_layout_id: selectedLayout.layout_id,
          images: [
            {
              ur_project_name: '',
              ur_image_path: '',
            },
            {
              ur_project_name: '',
              ur_image_path: '',
            },
          ],
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

      this.urbanisamLayouts.forEach((project, projectIndex) => {
        project.images.forEach((layout: any, layoutIndex: any) => {
          if (layout.layout_id === layoutId) {
            if (projectIndex === index) {
              project.images[index1].ur_image_path = imageUrl;
              this.hasChanges = true;
            }
          }
        });
      });
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  changeProject(event: any, index: number, layoutId: number) {
    this.urbanisamLayouts.forEach((project, projectIndex) => {
      project.images.forEach((layout: any, layoutIndex: any) => {
        if (layout.layout_id === layoutId) {
          if (projectIndex === index) {
            project.images[event.index].ur_project_name = event.name;
          }
          this.hasChanges = true;
        }
      });
    });
  }

  openAddLayoutDialog() {
    this.isAddLayoutPopupVisible = !this.isAddLayoutPopupVisible;
  }

  closeEditLayoutDialog() {
    this.isEditLayoutVisible = false;
    this.isAddLayoutPopupVisible = false;
  }

  openEditLayoutDialog(index?: any) {
    const ur_landing_page_id = this.urbanisamLayouts[index].ur_landing_page_id;

    this.selectedLayoutToReplace = {
      index,
      ur_landing_page_id,
    };
    this.isEditLayoutVisible = !this.isEditLayoutVisible;
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
    this.urbanisamLayouts.splice(index, 1);
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
      .postURLandingPageData(this.urbanisamLayouts)
      .subscribe((data) => {
        if (data.message === 'success') {
       this.msgService.successToaster('Uploaded successfully');
          this.fetchData();
          this.toTop();
          this.spinner.hide();
        }else{
          this.msgService.errorToaster('Please Add Project Image/Project Name');
          this.fetchData();
          this.spinner.hide();
        }
      });
  }

  navigateUrl(url: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      // Navigate back to the original URL
      this.router.navigateByUrl(url);
    });
  }
  
  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
