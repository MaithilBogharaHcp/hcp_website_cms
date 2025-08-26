interface FileWithIndex {
  file: File;
  index: number;
}

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
import { Layout5Component } from '../../common/layouts/layout5-P/layout5.component';
import { LayoutDialogComponent } from '../../common/dialog/layout-dialog/layout-dialog.component';
import { EditLayoutComponent } from '../../common/dialog/edit-layout/edit-layout.component';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { faPen, faTrash, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { DeleteLayoutComponent } from '../../common/dialog/delete-layout/delete-layout.component';
import { ToasterService } from '../../../services/toaster.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Layout31Component } from '../../common/layouts/layout31/layout31.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-architecture-project-page',
  standalone: true,
  templateUrl: './architecture-project-page.component.html',
  styleUrl: './architecture-project-page.component.css',
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
    Layout5Component,
    CmsTopbarComponent,
    FormsModule,
    FontAwesomeModule,
    CdkDropList,
    CdkDrag,
    CdkDragPlaceholder,
    DeleteLayoutComponent,
    ToastModule,
    FooterComponent,
  ],
  providers: [ToasterService, MessageService],
})
export class ArchitectureProjectPageComponent implements OnInit {
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
  architectureProjects!: any[];
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
  selectedLayoutToReplace: { index: any; ar_project_image_id: any } | null =
    null;
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
      .getArchitectureprojectPageData(this.router.url.split('/')[2])
      .subscribe((data) => {
        this.architectureProjects = data.data;
        this.architectureProjects.forEach((i, pIndex) => {
          i.layouts.map((a: any, layoutIndex: any) => {
            a.slider.map((sl: any, slIndex: any) => {
              const caption = a.captions[slIndex] ? a.captions[slIndex][0] : '';
              sl.drawing_captions = caption;
            });
          });
        });
        this.spinner.hide();
      });
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    this.architectureProjects.splice(index, 1);
    this.hasChanges = true;
    this.spinner.hide();
    this.isVisible = false;
  }

  onLayoutSelected(layoutId: any) {
    const selectedLayout = this.layoutArray.find(
      (layout) => layout.layout_id === layoutId.toString()
    );

    if (selectedLayout) {
      let newLayout: any;
      if (layoutId === '14') {
        newLayout = {
          ar_project_image_id: ``,
          layout_id: selectedLayout.layout_id,
          project_image: [''],
          slider: [
            {
              image: '../../../../../assets/Layouts/layout7.jpg',
              // image: './assets/Layouts/layout7.jpg',
            },
          ],
          captions: [['.']],
        };
      } else if (layoutId === '31') {
        newLayout = {
          ar_project_image_id: ``,
          layout_id: selectedLayout.layout_id,
          project_image: ['../../../../../assets/Layouts/layout31.jpg'],
          // project_image: ['./assets/Layouts/layout31.jpg'],
          slider: [],
          captions: [],
        };
      } else {
        newLayout = {
          ar_project_image_id: ``,
          layout_id: selectedLayout.layout_id,
          project_image: [''],
          slider: [],
          captions: [],
        };
      }

      if (this.architectureProjects.length > 0) {
        this.architectureProjects.push({
          layouts: [newLayout],
        });
        this.hasChanges = true;
      }

      this.selectedLayout = null;
      this.closeEditLayoutDialog();
    }
  }

  onLayoutReplaceSelected(event: any) {
    if (this.selectedLayoutToReplace) {
      const { index, ar_project_image_id } = this.selectedLayoutToReplace;

      const selectedLayout = this.layoutArray.find(
        (layout) => layout.layout_id === event
      );
      if (selectedLayout.layout_id === '14') {
        this.architectureProjects[index].layouts = [
          {
            ar_project_image_id: ar_project_image_id,
            layout_id: selectedLayout.layout_id,
            project_image: [],
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
        this.architectureProjects[index].layouts = [
          {
            ar_project_image_id: ar_project_image_id,
            layout_id: selectedLayout.layout_id,
            project_image: ['../../../../../assets/Layouts/layout31.jpg'],
            // project_image: ['./assets/Layouts/layout31.jpg'],
            slider: [],
            captions: [],
          },
        ];
      } else {
        this.architectureProjects[index].layouts = [
          {
            ar_project_image_id: ar_project_image_id,
            layout_id: selectedLayout.layout_id,
            project_image: [],
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
        this.architectureProjects.forEach((project, projectIndex) => {
          project.layouts.forEach((layout: any, layoutIndex: any) => {
            if (layout.layout_id === layoutId) {
              if (projectIndex === index) {
                layout.project_image[0] = videoUrl;
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
    const ar_project_image_id =
      this.architectureProjects[index].layouts[0].ar_project_image_id;

    this.selectedLayoutToReplace = {
      index,
      ar_project_image_id,
    };
    this.isEditLayoutVisible = !this.isEditLayoutVisible;
  }

  closeEditLayoutDialog() {
    this.isEditLayoutVisible = false;
    this.isAddLayoutPopupVisible = false;
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

  onFilesSelected(files: File | File[], index: number, layoutId: string) {
    const fileArray = Array.isArray(files) ? files : [files];
    const reader = new FileReader();

    fileArray.forEach((file, fileIndex) => {
      reader.onload = () => {
        const imageUrl = reader.result as string;

        this.architectureProjects.forEach((project, projectIndex) => {
          project.layouts.forEach((layout: any, layoutIndex: any) => {
            if (layout.layout_id === layoutId) {
              if (projectIndex === index) {
                layout.project_image[0] = imageUrl;
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

      this.architectureProjects.forEach((project, projectIndex) => {
        project.layouts.forEach((layout: any, layoutIndex: any) => {
          if (layout.layout_id === layoutId) {
            if (projectIndex === index) {
              layout.project_image[index1] = imageUrl;
              this.hasChanges = true;
            }
          }
        });
      });
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  onImageChange(event: any) {
    const { file, index } = event;

    const updatedProject = this.architectureProjects[index];

    if (updatedProject) {
      const layoutIndex = updatedProject.layouts.findIndex(
        (layout: any) => layout.layout_id === file.layout_id
      );

      if (layoutIndex !== -1) {
        updatedProject.layouts[layoutIndex] = {
          ...updatedProject.layouts[layoutIndex],
          image: file.image,
          drawing_captions: file.drawing_captions,
        };
      }
      this.hasChanges = true;
      this.architectureProjects = [...this.architectureProjects];
      this.cdr.detectChanges();
    }
  }

  changeTitle(event: any) {
    this.hasChanges = true;
    this.architectureProjects[event.index].project_name = event.title;
  }

  changeMetaTitle(event: any) {
    this.hasChanges = true;
    this.architectureProjects[event.index].meta_title = event.title;
  }

  changeMetaTag(event: any) {
    this.hasChanges = true;
    this.architectureProjects[event.index].meta_tag = event.title;
  }

  changeMetaDescription(event: any) {
    this.hasChanges = true;
    this.architectureProjects[event.index].meta_description =
      event.description.replace(/Â/g, '');
  }

  changeDescription(event: any) {
    this.hasChanges = true;
    this.architectureProjects[event.index].project_description =
      event.description.replace(/Â/g, '');
  }

  changeYear(event: any) {
    this.hasChanges = true;
    this.architectureProjects[event.index].project_year = event.year;
  }

  changeClient(event: any) {
    this.hasChanges = true;
    this.architectureProjects[event.index].project_client = event.client;
  }

  areasChange(event: any, index: number) {
    this.hasChanges = true;
    this.architectureProjects[index].title = event.value;
  }

  builtupChange(event: any) {
    this.hasChanges = true;
    this.architectureProjects[event.index].project_built_up_area =
      event.built_up_area;
  }

  onTagsChange(updatedTags: any, index: number) {
    if (Array.isArray(updatedTags)) {
      const tagsString = updatedTags[0];
      if (typeof tagsString === 'string') {
        const tagsArray = tagsString
          .split(',')
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0);
        this.hasChanges = true;
        this.architectureProjects[index].tags = tagsArray;
      }
    }
  }

  onPublish() {
    this.hasChanges = false;
    this.spinner.show();

    this.service
      .postARPojectPageData(this.architectureProjects)
      .subscribe((data) => {
        if (data.message === 'success') {
          this.msgService.successToaster('Uploaded successfully');
          this.fetchData();
          this.toTop();
          this.spinner.hide();
        }
      });
  }

  sideBarToogle() {
    this.isSideBar = !this.isSideBar;
  }

  activeHover() {
    this.draggable = false;
  }

  inactiveHover() {
    this.draggable = true;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.architectureProjects,
      event.previousIndex,
      event.currentIndex
    );
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
