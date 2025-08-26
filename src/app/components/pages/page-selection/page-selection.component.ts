import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TreeDropdownService } from '../../../services/tree-dropdown.service';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule, DatePipe } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonComponent } from '../../common/button/button.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { GeneralServicesService } from '../../../services/general-services.service';
import { DeleteLayoutComponent } from '../../common/dialog/delete-layout/delete-layout.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatDatepickerInputEvent,
  MatDatepickerModule,
  MatDateRangePicker,
} from '@angular/material/datepicker';
import { DateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import {
  CustomDateAdapter,
  WeekRangeSelectionStrategy,
} from '../press-news/custom-date-adapter';
import { environment } from '../../../../environments/environment.development';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { AuthService } from '../../../services/auth.service';

interface Column {
  field: string;
  header: string;
}
interface Layout {
  name: any;
  code: any;
}

interface ExhibitionSlider {
  image: string;
}

interface Exhibition {
  id: string;
  image: string;
  title: string;
  description: string;
  year: string;
  slider: ExhibitionSlider[];
}

@Component({
  selector: 'app-page-selection',
  standalone: true,
  templateUrl: './page-selection.component.html',
  styleUrl: './page-selection.component.css',
  providers: [
    provideNativeDateAdapter(),
    DatePipe,
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: WeekRangeSelectionStrategy,
    },
    {
      provide: DateAdapter,
      useClass: CustomDateAdapter,
    },
  ],
  imports: [
    RouterModule,
    ButtonModule,
    RouterLink,
    TreeTableModule,
    CommonModule,
    DialogModule,
    InputTextModule,
    ButtonComponent,
    NgxSpinnerModule,
    DeleteLayoutComponent,
    DropdownModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MultiSelectModule,
    CalendarModule,
  ],
})
export class PageSelectionComponent implements OnInit {
  @ViewChild('picker') picker!: MatDateRangePicker<any>;
  @ViewChild('sliderImageInput') sliderImageInput!: ElementRef;
  @ViewChild('changeImageInput') changeImageInput!: ElementRef;
  labelName: string = 'Project Name';
  selectedSliderIndex: number | any = null;
  maxDate: any;
  minDate: any;
  selectedStartDate: any = '';
  selectedEndDate: any = '';
  selectedNodes!: TreeNode[];
  files!: TreeNode[];
  isVisible: boolean = false;
  isWeeklyVisible: boolean = false;
  isPeopleVisible: boolean = false;
  isBrochuresVisible: boolean = false;
  isPeopleCoverImageVisible: boolean = false;
  isExibitionCoverImageVisible: boolean = false;
  isFeatureCoverImageVisible: boolean = false;
  isBookCoverImageVisible: boolean = false;
  isBrochuresCoverImageVisible: boolean = false;
  isHCPpressCoverImageVisible: boolean = false;
  isTalkAndSeminarCoverImageVisible: boolean = false;
  isStuInternCoverImageVisible: boolean = false;
  isworkoppCoverImageVisible: boolean = false;
  isAwardCoverImageVisible: boolean = false;
  isexhibitionsVisible: boolean = false;
  isStuInternVisible: boolean = false;
  isworkOppVisible: boolean = false;
  isFeaturesVisible: boolean = false;
  isAwardVisible: boolean = false;
  isBooksVisible: boolean = false;
  ispaperVisible: boolean = false;
  isHcpPressVisible: boolean = false;
  isTalkSeminarVisible: boolean = false;
  cols!: Column[];
  typeOfProject!: string;
  project_name = '';
  project_id = '';
  press_id = '';
  layouts: Layout[] | undefined;
  selectedLayout!: Layout;
  designationOption: any;
  coverImage: any;
  exibitioncoverImage: any;
  featurecoverImage: any;
  hcppresscoverImage: any;
  talkandseminarcoverImage: any;
  isPaperCoverImageVisible: any;
  awardcoverImage: any;
  stuInterncoverImage: any;
  workOppcoverImage: any;
  bookcoverImage: any;
  brochurescoverImage: any;
  papercoverImage: any;
  imageUrl = environment.image_url_server;

  person = {
    people_id: '',
    name: '',
    eduction: '',
    description: '',
    designation: null,
    bw_image_path: '',
    image_path: '',
  };

  features = {
    id: '',
    image: '',
    title: '',
    pdf: '',
    description: '',
    year: '',
  };

  hcp_press = {
    id: '',
    image: '',
    title: '',
    link: '',
    description: '',
    year: '',
  };

  talkSeminar = {
    id: '',
    image: '',
    title: '',
    link: '',
    description: '',
    year: '',
  };

  awards = {
    id: '',
    image: '',
    title: '',
    description: '',
    year: '',
  };

  book = {
    id: '',
    image: '',
    title: '',
    description: '',
    year: '',
  };

  exhibitions: Exhibition = {
    id: '',
    image: '',
    title: '',
    description: '',
    year: '',
    slider: [],
  };

  brochures = {
    id: '',
    image: '',
    title: '',
    grid_image: '',
    pdf: '',
    description: '',
    year: '',
  };

  paper = {
    id: '',
    image: '',
    title: '',
    pdf: '',
    description: '',
    year: '',
  };

  internship = {
    id: '',
    title: '',
    description: '',
  };

  workopp = {
    image: '',
    title: '',
    description: '',
  };

  workoppdata = {
    id: '',
    job_role: '',
    job_description: '',
    studio_name: '',
    position_summary: '',
    responsibilities: '',
    education: '',
    experience: '',
    skills_mandatory: '',
    skills_perferred: '',
    job_location: '',
    knowledge: '',
  };

  constructor(
    private router: Router,
    private tree_service: TreeDropdownService,
    private service: GeneralServicesService,
    private spinner: NgxSpinnerService,
    private datePipe: DatePipe,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.layouts = [
      { name: 'Layout Image', code: '4' },
      { name: 'Layout Video/mp4', code: '31' },
    ];

    this.spinner.show();
    this.tree_service.getProjectsFromBackend().subscribe((data: any) => {
      this.files = data;
      this.spinner.hide();
      const endDate = this.files[0]?.children?.[0]?.data?.end;
      const endDateObj = new Date(endDate);

      endDateObj.setDate(endDateObj.getDate() + 1);
      this.minDate = endDateObj;
    });
    this.cols = [{ field: 'name', header: 'Pages' }];
    this.Designation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  Designation() {
    this.service.getDesignationPeople().subscribe((data: any) => {
      this.designationOption = data.data;
    });
    this.service.peopleCoverImage().subscribe((data: any) => {
      this.coverImage = data.cover;
    });
    this.service.featuresCoverImage().subscribe((data: any) => {
      this.featurecoverImage = data.cover;
    });
    this.service.hcp_pressCoverImage().subscribe((data: any) => {
      this.hcppresscoverImage = data.cover;
    });
    this.service.getOutreachCoverImage().subscribe((data: any) => {
      this.talkandseminarcoverImage = data.cover;
    });
    this.service.getAwardCoverImage().subscribe((data: any) => {
      this.awardcoverImage = data.cover;
    });
    this.service.getExibitionCoverImage().subscribe((data: any) => {
      this.exibitioncoverImage = data.cover;
    });
    this.service.getBookCoverImage().subscribe((data: any) => {
      this.bookcoverImage = data.cover;
    });
    this.service.getBrochuresCoverImage().subscribe((data: any) => {
      this.brochurescoverImage = data.cover;
    });
    this.service.getPaperCoverImage().subscribe((data: any) => {
      this.papercoverImage = data.cover;
    });
    this.service.getstuInternCoverImage().subscribe((data: any) => {
      this.stuInterncoverImage = data.cover;
    });
    this.service.getWorkoppImage().subscribe((data: any) => {
      this.workopp = data.data[0];
    });
  }

  // this popup open/close use project page
  openClosePopup(project_type: string) {
    this.isVisible = !this.isVisible;
    this.typeOfProject = project_type;

    // Set label based on project_type
    if (this.typeOfProject === 'books') {
      this.labelName = 'Book Name';
      this.service.createNewBookID().subscribe((data: any) => {
        this.project_id = data.books_id;
      });
    } else {
      this.labelName = 'Project Name';
      if (this.typeOfProject === 'architecture') {
        this.service.createNewArchProjectID().subscribe((data: any) => {
          this.project_id = data.project_id;
        });
      } else if (this.typeOfProject === 'urbanism') {
        this.service.createNewUrbnProjectID().subscribe((data: any) => {
          this.project_id = data.project_id;
        });
      } else if (this.typeOfProject === 'legacy') {
        this.service.createNewEarlyProjectID().subscribe((data: any) => {
          this.project_id = data.project_id;
        });
      }
    }
  }

  // this popup open/close use weekly news page
  openCloseWeeklyPopup(project_type: string) {
    this.isWeeklyVisible = !this.isWeeklyVisible;
    this.typeOfProject = project_type;
    if (this.typeOfProject.toLowerCase() === 'weekly news') {
      this.service.createNewPressID().subscribe((data: any) => {
        this.press_id = data.press_id;
      });
    }
  }

  // this popup open/close use people data
  openClosePeoplePopup(project_type: string) {
    this.isPeopleVisible = !this.isPeopleVisible;
    this.typeOfProject = project_type;
    if (!this.isPeopleVisible) {
      this.clearPersonData();
    }
  }

  // this popup open/close use people data edit
  openCloseEditPeoplePopup(people_id: any) {
    console.log('click');
    
    this.isPeopleVisible = !this.isPeopleVisible;
    this.service.getSinglePeople(people_id).subscribe((data: any) => {
      this.person = data.data[0];
    });
  }

  // this popup open/close use people cover image
  openCloseEditPeopleCoverPopup() {
    this.isPeopleCoverImageVisible = !this.isPeopleCoverImageVisible;
    if (!this.isPeopleCoverImageVisible) {
      this.clearPersonData();
    }
  }

  // this popup open/close use Exhibitions data
  openCloseExhibitionsPopup(project_type: string) {
    this.isexhibitionsVisible = !this.isexhibitionsVisible;
    this.typeOfProject = project_type;
    if (!this.isexhibitionsVisible) {
      this.clearExhibitionData();
    }
  }

  // this popup open/close use Exhibitions data edit
  openCloseEditExhibitionsPopup(id: any) {
    this.isexhibitionsVisible = !this.isexhibitionsVisible;
    this.service.getSingleExibition(id).subscribe((data: any) => {
      this.exhibitions = data.data[0];
    });
  }

  openCloseEditexibitionCoverPopup() {
    this.isExibitionCoverImageVisible = !this.isExibitionCoverImageVisible;
    if (!this.isExibitionCoverImageVisible) {
      this.clearExhibitionData();
    }
  }

  // this popup open/close use features cover image
  openCloseEditFeatureCoverPopup() {
    this.isFeatureCoverImageVisible = !this.isFeatureCoverImageVisible;
    if (!this.isFeatureCoverImageVisible) {
      this.clearfeaturesData();
    }
  }

  // this popup open/close use features data
  openClosefeaturesPopup(project_type: string) {
    this.isFeaturesVisible = !this.isFeaturesVisible;
    this.typeOfProject = project_type;
    if (!this.isFeaturesVisible) {
      this.clearfeaturesData();
    }
  }

  // this popup open/close use features data edit
  openCloseEditFeaturePopup(id: any) {
    this.isFeaturesVisible = !this.isFeaturesVisible;
    this.service.getSingleFeatures(id).subscribe((data: any) => {
      this.features = data.data[0];
    });
  }

  // this popup open/close use HCPpress cover image
  openCloseEditHCPpressCoverPopup() {
    this.isHCPpressCoverImageVisible = !this.isHCPpressCoverImageVisible;
    if (!this.isHCPpressCoverImageVisible) {
      this.clearhcpPressData();
    }
  }

  // this popup open/close use hcp press data
  openCloseHcpPressPopup(project_type: string) {
    this.isHcpPressVisible = !this.isHcpPressVisible;
    this.typeOfProject = project_type;
    if (!this.isHcpPressVisible) {
      this.clearhcpPressData();
    }
  }

  // this popup open/close use features data edit
  openCloseEditHcpPressPopup(id: any) {
    this.isHcpPressVisible = !this.isHcpPressVisible;
    this.service.getSingleHcp_Press(id).subscribe((data: any) => {
      this.hcp_press = data.data[0];
    });
  }

  // this popup open/close use talk and seminar cover image
  openCloseEditTalkAndSeminarCoverPopup() {
    this.isTalkAndSeminarCoverImageVisible =
      !this.isTalkAndSeminarCoverImageVisible;
    if (!this.isTalkAndSeminarCoverImageVisible) {
      this.clearTalkAndSeminarData();
    }
  }

  // this popup open/close use talk and seminar data
  openClosetalkSeminarPopup(project_type: string) {
    this.isTalkSeminarVisible = !this.isTalkSeminarVisible;
    this.typeOfProject = project_type;
    if (!this.isTalkSeminarVisible) {
      this.clearTalkAndSeminarData();
    }
  }

  // this popup open/close use talk and seminar data edit
  openCloseEditTalkPopup(id: any) {
    this.isTalkSeminarVisible = !this.isTalkSeminarVisible;
    this.service.getSingleTalkSeminar(id).subscribe((data: any) => {
      this.talkSeminar = data.data[0];
    });
  }

  // this popup open/close use award cover image
  openCloseEditAwardCoverPopup() {
    this.isAwardCoverImageVisible = !this.isAwardCoverImageVisible;
    if (!this.isAwardCoverImageVisible) {
      this.clearAwardData();
    }
  }

  // this popup open/close use talk and seminar data
  openCloseAwardPopup(project_type: string) {
    this.isAwardVisible = !this.isAwardVisible;
    this.typeOfProject = project_type;
    if (!this.isAwardVisible) {
      this.clearAwardData();
    }
  }

  // this popup open/close use talk and seminar data edit
  openCloseEditAwardPopup(id: any) {
    this.isAwardVisible = !this.isAwardVisible;
    this.service.getSingleAward(id).subscribe((data: any) => {
      this.awards = data.data[0];
    });
  }

  // this popup open/close use book cover image
  openCloseEditBookCoverPopup() {
    this.isBookCoverImageVisible = !this.isBookCoverImageVisible;
    if (!this.isBookCoverImageVisible) {
      this.clearBookdData();
    }
  }

  // this popup open/close use book data
  openCloseBooksPopup(project_type: string) {
    this.isBooksVisible = !this.isBooksVisible;
    this.typeOfProject = project_type;
    if (!this.isBooksVisible) {
      this.clearBookdData();
    }
  }

  // this popup open/close use book data edit
  openCloseEditBooksPopup(id: any) {
    this.isBooksVisible = !this.isBooksVisible;
    this.service.getSingleBooks(id).subscribe((data: any) => {
      this.book = data.data[0];
    });
  }

  // this popup open/close use Brochures cover image
  openCloseEditBrochuresCoverPopup() {
    this.isBrochuresCoverImageVisible = !this.isBrochuresCoverImageVisible;
    if (!this.isBrochuresCoverImageVisible) {
      this.clearBrochuresData();
    }
  }

  // this popup open/close use Brochures data
  openCloseBrochuresPopup(project_type: string) {
    this.isBrochuresVisible = !this.isBrochuresVisible;
    this.typeOfProject = project_type;
    if (!this.isBrochuresVisible) {
      this.clearBrochuresData();
    }
  }

  // this popup open/close use Brochures data edit
  openCloseEditBrochuresPopup(id: any) {
    this.isBrochuresVisible = !this.isBrochuresVisible;
    this.service.getSingleBrochures(id).subscribe((data: any) => {
      this.brochures = data.data[0];
    });
  }

  // this popup open/close use paper cover image
  openCloseEditPaperCoverPopup() {
    this.isPaperCoverImageVisible = !this.isPaperCoverImageVisible;
    if (!this.isPaperCoverImageVisible) {
      this.clearPaperData();
    }
  }

  // this popup open/close use paper data
  openClosePaperPopup(project_type: string) {
    this.ispaperVisible = !this.ispaperVisible;
    this.typeOfProject = project_type;
    if (!this.ispaperVisible) {
      this.clearPaperData();
    }
  }

  // this popup open/close use paper data edit
  openCloseEditPaperPopup(id: any) {
    this.ispaperVisible = !this.ispaperVisible;
    this.service.getSinglePaper(id).subscribe((data: any) => {
      this.paper = data.data[0];
    });
  }

  // this popup open/close use student intern cover image
  openCloseEditstuInternCoverPopup() {
    this.isStuInternCoverImageVisible = !this.isStuInternCoverImageVisible;
    if (!this.isStuInternCoverImageVisible) {
      this.clearstuInternData();
    }
  }

  // this popup open/close use student intern data
  openClosestuInternPopup(project_type: string) {
    this.isStuInternVisible = !this.isStuInternVisible;
    this.typeOfProject = project_type;
    if (!this.isStuInternVisible) {
      this.clearstuInternData();
    }
  }

  // this popup open/close use student intern data edit
  openCloseEditstuInternPopup(id: any) {
    this.isStuInternVisible = !this.isStuInternVisible;
    this.service.getSinglestuIntern(id).subscribe((data: any) => {
      this.internship = data.data[0];
    });
  }

  openCloseEditworkOppCoverPopup() {
    this.isworkoppCoverImageVisible = !this.isworkoppCoverImageVisible;
    if (!this.isworkoppCoverImageVisible) {
      this.clearworkOppData();
    }
  }

  // this popup open/close use work opp data
  openCloseworkOppPopup(project_type: string) {
    this.isworkOppVisible = !this.isworkOppVisible;
    this.typeOfProject = project_type;
    if (!this.isworkOppVisible) {
      this.clearworkOppData();
    }
  }

  // this popup open/close use work opp data edit
  openCloseEditworkOppPopup(id: any) {
    this.isworkOppVisible = !this.isworkOppVisible;
    this.service.getSingleWorkopp(id).subscribe((data: any) => {
      this.workoppdata = data.data[0];
    });
  }

  naviagate(value: string) {
    console.log(value, 'value');

    this.router.navigate([`/${value}`]);
  }

  // delete data
  deleteProject(rowData: any) {
    if (rowData.project_type === 'architecture') {
      const confirmed = window.confirm(
        'Are you sure you want to delete this project?'
      );
      if (confirmed) {
        this.spinner.show();
        this.service
          .deleteArchProject(rowData.project_id)
          .subscribe((data: any) => {
            location.reload();
            this.spinner.hide();
          });
      }
    } else if (rowData.project_type === 'urbanism') {
      const confirmed = window.confirm(
        'Are you sure you want to delete this project?'
      );
      if (confirmed) {
        this.spinner.show();
        this.service
          .deleteUrbnProject(rowData.project_id)
          .subscribe((data: any) => {
            location.reload();
            this.spinner.hide();
          });
      }
    } else if (rowData.project_type === 'legacy') {
      const confirmed = window.confirm(
        'Are you sure you want to delete this project?'
      );
      if (confirmed) {
        this.spinner.show();
        this.service
          .deleteEarlyProject(rowData.project_id)
          .subscribe((data: any) => {
            location.reload();
            this.spinner.hide();
          });
      }
    } else if (rowData.project_type === 'press') {
      const confirmed = window.confirm(
        'Are you sure you want to delete this Weekly news?'
      );
      if (confirmed) {
        this.spinner.show();
        this.service.deletePress(rowData.project_id).subscribe((data: any) => {
          // location.reload();
          this.spinner.hide();
        });
      }
    } else if (rowData.project_type === 'people') {
      const confirmed = window.confirm(
        'Are you sure you want to delete this people?'
      );
      if (confirmed) {
        this.spinner.show();
        this.service.deletePeople(rowData.project_id).subscribe((data: any) => {
          location.reload();
          this.spinner.hide();
        });
      }
    } else if (rowData.project_type === 'exhibition') {
      const confirmed = window.confirm(
        'Are you sure you want to delete this Exhibition?'
      );
      if (confirmed) {
        this.spinner.show();
        this.service
          .deleteExibition(rowData.project_id)
          .subscribe((data: any) => {
            location.reload();
            this.spinner.hide();
          });
      }
    } else if (rowData.project_type === 'features') {
      const confirmed = window.confirm(
        'Are you sure you want to delete this feature?'
      );
      if (confirmed) {
        this.spinner.show();
        this.service
          .deletefeatures(rowData.project_id)
          .subscribe((data: any) => {
            location.reload();
            this.spinner.hide();
          });
      }
    } else if (rowData.project_type === 'hcp_press') {
      const confirmed = window.confirm(
        'Are you sure you want to delete this Hcp Press?'
      );
      if (confirmed) {
        this.spinner.show();
        this.service
          .deleteHcp_Press(rowData.project_id)
          .subscribe((data: any) => {
            location.reload();
            this.spinner.hide();
          });
      }
    } else if (rowData.project_type === 'talks-seminars') {
      const confirmed = window.confirm(
        'Are you sure you want to delete this Talks And Seminar?'
      );
      if (confirmed) {
        this.spinner.show();
        this.service
          .deleteTalksSeminar(rowData.project_id)
          .subscribe((data: any) => {
            location.reload();
            this.spinner.hide();
          });
      }
    } else if (rowData.project_type === 'awards') {
      const confirmed = window.confirm(
        'Are you sure you want to delete this Award?'
      );
      if (confirmed) {
        this.spinner.show();
        this.service.deleteAward(rowData.project_id).subscribe((data: any) => {
          location.reload();
          this.spinner.hide();
        });
      }
    } else if (rowData.project_type === 'books') {
      const confirmed = window.confirm(
        'Are you sure you want to delete this Book?'
      );
      if (confirmed) {
        this.spinner.show();
        this.service.deleteBook(rowData.project_id).subscribe((data: any) => {
          location.reload();
          this.spinner.hide();
        });
      }
    } else if (rowData.project_type === 'brochures') {
      const confirmed = window.confirm(
        'Are you sure you want to delete this Brochures?'
      );
      if (confirmed) {
        this.spinner.show();
        this.service
          .deleteBrochures(rowData.project_id)
          .subscribe((data: any) => {
            location.reload();
            this.spinner.hide();
          });
      }
    } else if (rowData.project_type === 'papers') {
      const confirmed = window.confirm(
        'Are you sure you want to delete this Paper?'
      );
      if (confirmed) {
        this.spinner.show();
        this.service.deletePaper(rowData.project_id).subscribe((data: any) => {
          location.reload();
          this.spinner.hide();
        });
      }
    } else if (rowData.project_type === 'student-internships') {
      const confirmed = window.confirm(
        'Are you sure you want to delete this Student Internship?'
      );
      if (confirmed) {
        this.spinner.show();
        this.service
          .deletestuIntern(rowData.project_id)
          .subscribe((data: any) => {
            location.reload();
            this.spinner.hide();
          });
      }
    } else if (rowData.project_type === 'work_opp') {
      const confirmed = window.confirm(
        'Are you sure you want to delete this Work Opportunities?'
      );
      if (confirmed) {
        this.spinner.show();
        this.service
          .deleteWorkopp(rowData.project_id)
          .subscribe((data: any) => {
            location.reload();
            this.spinner.hide();
          });
      }
    }
  }

  // project page project name manage
  chanageProjectName(event: any) {
    this.project_name = event.target.value.replace(/\s+/g, ' ').trim();
  }

  // project page redirect
  popUpNavigate(url: string) {
    if (!this.project_name || !this.selectedLayout?.code) {
      alert('Please fill in all the required fields!');
      this.spinner.hide();
      return;
    }
    this.spinner.show();
    if (this.typeOfProject === 'architecture') {
      this.service
        .createArchProject(
          this.project_name,
          this.selectedLayout.code,
          this.project_id
        )
        .subscribe((data: any) => {
          this.naviagate(`/architecture/${this.project_id}`);
          // location.reload();
          this.spinner.hide();
        });
    } else if (this.typeOfProject === 'urbanism') {
      this.service
        .createUrbanProject(
          this.project_name,
          this.selectedLayout.code,
          this.project_id
        )
        .subscribe((data: any) => {
          this.naviagate(`/urbanism/${this.project_id}`);
          this.spinner.hide();
        });
    } else if (this.typeOfProject === 'legacy') {
      this.service
        .createEarlyProject(
          this.project_name,
          this.selectedLayout.code,
          this.project_id
        )
        .subscribe((data: any) => {
          this.naviagate(`/legacy/${this.project_id}`);
          this.spinner.hide();
        });
    } else if (this.typeOfProject === 'books') {
      this.service
        .createBooks(
          this.project_name,
          this.selectedLayout.code,
          this.project_id
        )
        .subscribe((data: any) => {
          this.naviagate(`/books/${this.project_id}`);
          this.spinner.hide();
        });
    }
  }

  // weekly news page redirect
  popUpNavigateWeek() {
    if (!this.selectedStartDate || !this.selectedEndDate) {
      alert('Please fill in all the required fields!');
      this.spinner.hide();
      return;
    }
    this.spinner.show();
    if (this.typeOfProject.toLowerCase() === 'weekly news') {
      this.service
        .createPressWeek(
          this.selectedStartDate,
          this.selectedEndDate,
          this.press_id
        )
        .subscribe((data: any) => {
          this.naviagate(`/press/${this.press_id}`);
          // location.reload();
          this.spinner.hide();
        });
    }
  }

  openDatePicker(): void {
    this.picker.open();
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      const formattedDate = this.datePipe.transform(event.value, 'yyyy-MM-dd');
      if (this.selectedStartDate === '') {
        this.selectedStartDate = formattedDate;
      } else {
        this.selectedEndDate = formattedDate;
      }
    }
  }

  myFilter = (d: any | null): boolean => {
    const day = d || new Date();

    const blockedRanges = [
      { start: new Date(2024, 10, 1), end: new Date(2024, 10, 10) },
      { start: new Date(2024, 9, 28), end: new Date(2024, 9, 31) },
      { start: new Date(2025, 0, 6), end: new Date(2025, 0, 12) },
    ];

    for (const range of blockedRanges) {
      if (d >= range.start && d <= range.end) {
        return false;
      }
    }

    return true;
  };

  isBase64(imagePath: string | null): boolean {
    return imagePath ? imagePath.startsWith('data:image/') : false;
  }
  isBase64Pdf(imagePath: string | null): boolean {
    return imagePath ? imagePath.startsWith('data:application/pdf') : false;
  }

  //  images and pdf select
  onFileSelected(event: any, type: string) {
    const file = event.target.files[0];
    if (file) {
      if (file.type === 'application/pdf' && type === 'features_pdf') {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const fileURL = e.target.result;
          this.features.pdf = fileURL;
        };
        reader.readAsDataURL(file);
      } else if (file.type === 'application/pdf' && type === 'brochures_pdf') {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const fileURL = e.target.result;
          this.brochures.pdf = fileURL;
        };
        reader.readAsDataURL(file);
      } else if (file.type === 'application/pdf' && type === 'paper_pdf') {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const fileURL = e.target.result;
          this.paper.pdf = fileURL;
        };
        reader.readAsDataURL(file);
      } else {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const img = new Image();
          img.src = e.target.result;
          img.onload = () => {
            const width = img.width;
            const height = img.height;

            // Validate dimensions
            if (type === 'bw_image' && width === 450 && height === 450) {
              this.person.bw_image_path = e.target.result;
            } else if (
              type === 'color_image' &&
              width === 450 &&
              height === 630
            ) {
              this.person.image_path = e.target.result;
            } else if (
              type === 'exhibitions_image' &&
              width === 557 &&
              height === 313
            ) {
              this.exhibitions.image = e.target.result;
            } else if (
              type === 'brochures_image' &&
              width === 557 &&
              height === 313
            ) {
              this.brochures.grid_image = e.target.result;
            } else if (
              type === 'paper_image' &&
              width === 412 &&
              height === 412
            ) {
              this.paper.image = e.target.result;
            } else if (type === 'brochures_details_image' && width === 1920) {
              this.brochures.image = e.target.result;
            } else if (
              type === 'features_image' &&
              width === 412 &&
              height === 412
            ) {
              this.features.image = e.target.result;
            } else if (
              type === 'hcp_press_image' &&
              width === 412 &&
              height === 412
            ) {
              this.hcp_press.image = e.target.result;
            } else if (
              type === 'talkSeminar_image' &&
              width === 557 &&
              height === 313
            ) {
              this.talkSeminar.image = e.target.result;
            } else if (
              type === 'award_image' &&
              width === 412 &&
              height === 412
            ) {
              this.awards.image = e.target.result;
            } else if (
              type === 'book_image' &&
              width === 412 &&
              height === 412
            ) {
              this.book.image = e.target.result;
            } else if (
              type === 'peopele_cover_image' &&
              width === 1920 &&
              height === 1080
            ) {
              this.coverImage = e.target.result;
            } else if (
              type === 'exibition_cover_image' &&
              width === 1920 &&
              height === 1080
            ) {
              this.exibitioncoverImage = e.target.result;
            } else if (
              type === 'stuIntern_cover_image' &&
              width === 1920 &&
              height === 1080
            ) {
              this.stuInterncoverImage = e.target.result;
            } else if (
              type === 'brochures_cover_image' &&
              width === 1920 &&
              height === 1080
            ) {
              this.brochurescoverImage = e.target.result;
            } else if (
              type === 'workopp_cover_image' &&
              width === 1920 &&
              height === 1080
            ) {
              this.workopp.image = e.target.result;
            } else if (
              type === 'paper_cover_image' &&
              width === 1920 &&
              height === 1080
            ) {
              this.papercoverImage = e.target.result;
            } else if (
              type === 'features_cover_image' &&
              width === 1920 &&
              height === 1080
            ) {
              this.featurecoverImage = e.target.result;
            } else if (
              type === 'hcppress_cover_image' &&
              width === 1920 &&
              height === 1080
            ) {
              this.hcppresscoverImage = e.target.result;
            } else if (
              type === 'talk_cover_image' &&
              width === 1920 &&
              height === 1080
            ) {
              this.talkandseminarcoverImage = e.target.result;
            } else if (
              type === 'award_cover_image' &&
              width === 1920 &&
              height === 1080
            ) {
              this.awardcoverImage = e.target.result;
            } else if (
              type === 'book_cover_image' &&
              width === 1920 &&
              height === 1080
            ) {
              this.bookcoverImage = e.target.result;
            } else {
              alert(
                'Invalid image dimensions. Please upload the correct image size.'
              );
            }
          };
        };
        reader.readAsDataURL(file);
      }
    }
  }

  // exhibitions add new slider Image
  addImage() {
    this.sliderImageInput.nativeElement.value = '';
    this.sliderImageInput.nativeElement.click();
  }

  // exhibitions slider image select
  onSliderImageSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        if (image.width === 1920) {
          const imageBase64 = reader.result as string;
          this.exhibitions.slider.push({ image: imageBase64 });
        } else {
          alert('Image width must be exactly 1920px.');
        }
      };
      image.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  // exhibitions slider image change select
  openChangeImage(index: number) {
    this.selectedSliderIndex = index;
    this.changeImageInput.nativeElement.value = '';
    this.changeImageInput.nativeElement.click();
  }

  // exhibitions slider image change
  onChangeSliderImage(event: any) {
    const file = event.target.files[0];
    if (!file || this.selectedSliderIndex === null) return;

    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        if (image.width === 1920) {
          const imageBase64 = reader.result as string;
          this.exhibitions.slider[this.selectedSliderIndex] = {
            image: imageBase64,
          };
          this.selectedSliderIndex = null;
        } else {
          alert('Image width must be exactly 1920px.');
        }
      };
      image.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  // year select
  onYearSelect(event: any, page_type: any) {
    if (event instanceof Date) {
      const selectedYear = event.getFullYear();
      if (page_type === 'exhibitions') {
        this.exhibitions.year = selectedYear.toString();
      } else if (page_type === 'features') {
        this.features.year = selectedYear.toString();
      } else if (page_type === 'hcp_press') {
        this.hcp_press.year = selectedYear.toString();
      } else if (page_type === 'talks-seminars') {
        this.talkSeminar.year = selectedYear.toString();
      } else if (page_type === 'book') {
        this.book.year = selectedYear.toString();
      } else if (page_type === 'awards') {
        this.awards.year = selectedYear.toString();
      } else if (page_type === 'brochures') {
        this.brochures.year = selectedYear.toString();
      } else if (page_type === 'paper') {
        this.paper.year = selectedYear.toString();
      }
    }
  }

  // people page people data clear
  clearPersonData() {
    this.person = {
      people_id: '',
      name: '',
      eduction: '',
      description: '',
      designation: null,
      bw_image_path: '',
      image_path: '',
    };
  }

  // exhibition page features data clear
  clearExhibitionData() {
    this.exhibitions = {
      id: '',
      image: '',
      title: '',
      description: '',
      year: '',
      slider: [],
    };
  }

  // features page features data clear
  clearfeaturesData() {
    this.features = {
      id: '',
      image: '',
      title: '',
      pdf: '',
      description: '',
      year: '',
    };
  }

  // hcp press page hcp press data clear
  clearhcpPressData() {
    this.hcp_press = {
      id: '',
      image: '',
      title: '',
      link: '',
      description: '',
      year: '',
    };
  }

  // talk and seminar page talk and seminar data clear
  clearTalkAndSeminarData() {
    this.talkSeminar = {
      id: '',
      image: '',
      title: '',
      link: '',
      description: '',
      year: '',
    };
  }

  // Award page Award data clear
  clearAwardData() {
    this.awards = {
      id: '',
      image: '',
      title: '',
      description: '',
      year: '',
    };
  }

  // book page book data clear
  clearBookdData() {
    this.book = {
      id: '',
      image: '',
      title: '',
      description: '',
      year: '',
    };
  }

  // Brochures page Brochures data clear
  clearBrochuresData() {
    this.brochures = {
      id: '',
      image: '',
      title: '',
      grid_image: '',
      pdf: '',
      description: '',
      year: '',
    };
  }

  // Paper page Brochures data clear
  clearPaperData() {
    this.paper = {
      id: '',
      image: '',
      title: '',
      pdf: '',
      description: '',
      year: '',
    };
  }

  // Paper page Brochures data clear
  clearstuInternData() {
    this.internship = {
      id: '',
      title: '',
      description: '',
    };
  }
  // Paper page Brochures data clear
  clearworkOppData() {
    this.workoppdata = {
      id: '',
      job_role: '',
      job_description: '',
      studio_name: '',
      position_summary: '',
      responsibilities: '',
      education: '',
      experience: '',
      skills_mandatory: '',
      skills_perferred: '',
      job_location: '',
      knowledge: '',
    };
  }

  // features page features pdf data clear
  clearData(type: any) {
    if (type === 'features') {
      this.features.pdf = '';
    } else if (type === 'brochures') {
      this.brochures.pdf = '';
    }
  }

  // cover image update apis
  coverImageChange(page_type: any) {
    this.spinner.show();
    if (page_type === 'peopele_cover_image') {
      this.service
        .peopleCoverImageUpdate(this.coverImage)
        .subscribe((response: any) => {
          this.isPeopleCoverImageVisible = false;
          this.spinner.hide();
          location.reload();
        });
    } else if (page_type === 'exibition_cover_image') {
      this.service
        .postExibitionCoverImageUpdate(this.exibitioncoverImage)
        .subscribe((response: any) => {
          this.isExibitionCoverImageVisible = false;
          this.spinner.hide();
          location.reload();
        });
    } else if (page_type === 'features_cover_image') {
      this.service
        .featuresCoverImageUpdate(this.featurecoverImage)
        .subscribe((response: any) => {
          this.isFeatureCoverImageVisible = false;
          this.spinner.hide();
          location.reload();
        });
    } else if (page_type === 'hcppress_cover_image') {
      this.service
        .hcp_pressCoverImageUpdate(this.hcppresscoverImage)
        .subscribe((response: any) => {
          this.isHCPpressCoverImageVisible = false;
          this.spinner.hide();
          location.reload();
        });
    } else if (page_type === 'talk_cover_image') {
      this.service
        .postOutreachCoverImageUpdate(this.talkandseminarcoverImage)
        .subscribe((response: any) => {
          this.isTalkAndSeminarCoverImageVisible = false;
          this.spinner.hide();
          location.reload();
        });
    } else if (page_type === 'award_cover_image') {
      this.service
        .postAwardCoverImageUpdate(this.awardcoverImage)
        .subscribe((response: any) => {
          this.isAwardCoverImageVisible = false;
          this.spinner.hide();
          location.reload();
        });
    }
     else if (page_type === 'book_cover_image') {
      this.service
        .postBookCoverImageUpdate(this.bookcoverImage)
        .subscribe((response: any) => {
          this.isBookCoverImageVisible = false;
          this.spinner.hide();
          location.reload();
        });
    }
    else if (page_type === 'brochures_cover_image') {
      this.service
        .postBrochuresCoverImageUpdate(this.brochurescoverImage)
        .subscribe((response: any) => {
          this.isBrochuresCoverImageVisible = false;
          this.spinner.hide();
          location.reload();
        });
    } else if (page_type === 'paper_cover_image') {
      this.service
        .postPaperCoverImageUpdate(this.papercoverImage)
        .subscribe((response: any) => {
          this.isPaperCoverImageVisible = false;
          this.spinner.hide();
          location.reload();
        });
    } else if (page_type === 'stuIntern_cover_image') {
      this.service
        .poststuInternCoverImageUpdate(this.stuInterncoverImage)
        .subscribe((response: any) => {
          this.isStuInternCoverImageVisible = false;
          this.spinner.hide();
          location.reload();
        });
    } else if (page_type === 'workopp_cover_image') {
      this.service
        .postWorkoppCoverImageUpdate(this.workopp)
        .subscribe((response: any) => {
          this.isworkoppCoverImageVisible = false;
          this.spinner.hide();
          location.reload();
        });
    }
  }

  // people add/edit api
  addPeople() {
    if (
      !this.person.name ||
      !this.person.designation ||
      !this.person.description
    ) {
      alert('Please fill in all required fields!');
      return;
    }
    this.spinner.show();
    this.service.addPeople(this.person).subscribe((response: any) => {
      this.isPeopleVisible = false;
      this.spinner.hide();
      this.clearPersonData();
      location.reload();
    });
  }

  addExhibitions() {
    if (
      !this.exhibitions.title ||
      !this.exhibitions.description ||
      !this.exhibitions.image ||
      !this.exhibitions.year
    ) {
      alert('Please fill in all required fields!');
      return;
    }
    this.spinner.show();
    this.service.addExibition(this.exhibitions).subscribe((response: any) => {
      this.isexhibitionsVisible = false;
      this.spinner.hide();
      this.clearExhibitionData();
      location.reload();
    });
  }

  // features add/edit api
  addFeatures() {
    if (
      !this.features.title ||
      !this.features.description ||
      !this.features.image ||
      !this.features.year
    ) {
      alert('Please fill in all required fields!');
      return;
    }
    this.spinner.show();
    this.service.addFeatures(this.features).subscribe((response: any) => {
      this.isFeaturesVisible = false;
      this.spinner.hide();
      this.clearfeaturesData();
      location.reload();
    });
  }

  // Hcp Press add/edit api
  addHcpPress() {
    if (
      !this.hcp_press.title ||
      !this.hcp_press.description ||
      !this.hcp_press.image ||
      !this.hcp_press.year
    ) {
      alert('Please fill in all required fields!');
      return;
    }
    this.spinner.show();
    this.service.addHcp_Press(this.hcp_press).subscribe((response: any) => {
      this.isHcpPressVisible = false;
      this.spinner.hide();
      this.clearhcpPressData();
      location.reload();
    });
  }

  // Talk & Seminar add/edit api
  addTalkSeminar() {
    if (
      !this.talkSeminar.title ||
      !this.talkSeminar.description ||
      !this.talkSeminar.image ||
      !this.talkSeminar.year
    ) {
      alert('Please fill in all required fields!');
      return;
    }
    this.spinner.show();
    this.service.addTalkSeminar(this.talkSeminar).subscribe((response: any) => {
      this.isTalkSeminarVisible = false;
      this.spinner.hide();
      this.clearTalkAndSeminarData();
      location.reload();
    });
  }

  // award add/edit api
  addAward() {
    if (!this.awards.title || !this.awards.description || !this.awards.image) {
      alert('Please fill in all required fields!');
      return;
    }

    this.spinner.show();
    this.service.addAward(this.awards).subscribe((response: any) => {
      this.isAwardVisible = false;
      this.spinner.hide();
      this.clearAwardData();
      location.reload();
    });
  }

  // book add/edit api
  addBook() {
    if (!this.book.title || !this.book.description || !this.book.image) {
      alert('Please fill in all required fields!');
      return;
    }

    this.spinner.show();
    this.service.addBook(this.book).subscribe((response: any) => {
      this.isBooksVisible = false;
      this.spinner.hide();
      this.clearBookdData();
      location.reload();
    });
  }

  addBrochures() {
    if (
      !this.brochures.title ||
      !this.brochures.description ||
      !this.brochures.image ||
      !this.brochures.grid_image ||
      !this.brochures.pdf
    ) {
      alert('Please fill in all required fields!');
      return;
    }

    this.spinner.show();
    this.service.addBrochures(this.brochures).subscribe((response: any) => {
      this.isBrochuresVisible = false;
      this.spinner.hide();
      this.clearBrochuresData();
      location.reload();
    });
  }
  addPaper() {
    if (!this.paper.title || !this.paper.image || !this.paper.pdf) {
      alert('Please fill in all required fields!');
      return;
    }

    this.spinner.show();
    this.service.addPaper(this.paper).subscribe((response: any) => {
      this.ispaperVisible = false;
      this.spinner.hide();
      this.clearPaperData();
      location.reload();
    });
  }

  addStudentInternship() {
    if (!this.internship.title || !this.internship.description) {
      alert('Please fill in all required fields!');
      return;
    }

    this.spinner.show();
    this.service.addstuIntern(this.internship).subscribe((response: any) => {
      this.isStuInternVisible = false;
      this.spinner.hide();
      this.clearstuInternData();
      location.reload();
    });
  }
  addWorkOpp() {
    if (
      !this.workoppdata.job_role ||
      !this.workoppdata.job_location ||
      !this.workoppdata.studio_name
    ) {
      alert('Please fill in all required fields!');
      return;
    }

    this.spinner.show();
    this.service.addWorkopp(this.workoppdata).subscribe((response: any) => {
      this.isworkOppVisible = false;
      this.spinner.hide();
      this.clearworkOppData();
      location.reload();
    });
  }

  // paragraph <br/> add
  AddParaGap() {
    const descriptionField = document.getElementById(
      'gap-description'
    ) as HTMLTextAreaElement;
    if (descriptionField) {
      const currentText = descriptionField.value;
      const hasTwoBreaksAtEnd = /(<br\s*\/?>){2}$/i.test(currentText);

      if (!hasTwoBreaksAtEnd) {
        descriptionField.value += '<br /><br />';
      }
    }
  }

  AddComma(field: keyof typeof this.workoppdata) {
    const currentText = this.workoppdata[field];

    if (typeof currentText === 'string') {
      if (!currentText.trim().endsWith('[,]')) {
        this.workoppdata[field] = currentText.trim() + '[,]';
      }
    } else if (Array.isArray(currentText)) {
      // Handle cases where someone passes an array field accidentally (optional)
      console.warn(`${field} is already an array`);
    }
  }

  AddLink(type: any) {
    const linkTag = `<a class="text-[#33C1FF] cursor-pointer" href="">Add Text</a>`;
    if (type === 'intern') {
      this.internship.description = this.internship.description
        ? this.internship.description + ' ' + linkTag
        : linkTag;
    } else if (type === 'work') {
      this.workopp.description = this.workopp.description
        ? this.workopp.description + ' ' + linkTag
        : linkTag;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // or any redirect you need
  }
}
