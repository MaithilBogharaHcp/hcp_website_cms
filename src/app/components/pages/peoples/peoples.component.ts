import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { Router, RouterModule } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../../environments/environment.development';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { TreeModule } from 'primeng/tree';
import { GeneralServicesService } from '../../../services/general-services.service';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CmsTopbarComponent } from '../../shared/cms-topbar/cms-topbar.component';
import { Layout4Component } from '../../common/layouts/layout4-P/layout4.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToasterService } from '../../../services/toaster.service';
import { Layout25Component } from '../../common/layouts/layout25/layout25.component';
import { ButtonComponent } from '../../common/button/button.component';
import { DialogModule } from 'primeng/dialog';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from '../../shared/footer/footer.component';

interface PeopleData {
  [key: string]: any;
}

@Component({
  selector: 'app-peoples',
  standalone: true,
  templateUrl: './peoples.component.html',
  styleUrl: './peoples.component.css',
  providers: [ToasterService, MessageService],
  imports: [
    TopbarComponent,
    CmsTopbarComponent,
    CommonModule,
    FormsModule,
    DropdownModule,
    Layout4Component,
    Layout25Component,
    FormsModule,
    MatIconModule,
    OverlayPanelModule,
    ButtonModule,
    TreeModule,
    OverlayPanelModule,
    RouterModule,
    ToastModule,
    NgxSpinnerModule,
    ButtonComponent,
    DialogModule,
    FontAwesomeModule,
    FooterComponent
  ],
})
export class PeoplesComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private loader: NgxSpinnerService,
    private service: GeneralServicesService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    public msgService: ToasterService
  ) {}
  faTrash = faTrash;
  cover_image!: string;
  founder_info: any;
  // founder_info = {
  //   people_id: '2',
  //   bw_image_path:
  //     '/HCP_Website/CMS/page_people/bw_Image1/2_535169956336977.jpg',
  //   image_path: '/HCP_Website/CMS/page_people/Image1/2_2514694814223548.jpg',
  //   name: 'Hasmukh C. Patel',
  //   description:
  //     "Hasmukh Patel founded HCP as a three-man office in 1960 after obtaining a B.Arch from MS University, Vadodara and an M.Arch from Cornell University, New York. His practice has since grown in strength to over 200 people with a legacy of over 800 built projects. His work covers a diverse range of projects, all of which are practical, modest, easy to maintain and user-friendly structures. Some of his most celebrated projects are the Chinubhai Centre, Patang Hotel, Newman Hall, Centre Point Apartments, St. Xavier's Primary School, Reserve Bank of India and Dena Bank. He was the Honorary Director at the School of Architecture, CEPT, Ahmedabad from 1972 to 1981 and Dean from 1978 to 1988 during which period CEPT consolidated its position as a premier institution. He served as visiting professor at many universities in India and abroad. Hasmukhbhai was also an avid painter, and loved exploring different mediums of output for his creativity.",
  //   designation_id: '2',
  //   row: '2',
  //   designation_name: 'Founder',
  //   role_name: 'Directors ',
  //   key: 'row_0',
  // };
  ispeopleLoading: boolean = false;
  people_bar_menu: any;
  peopleMenuText: any;
  hoverDropdown: boolean = false;
  isActive: number | null = null;
  isFilter = false;
  showFounder = true;
  isLoading = true;
  isDropdownOn: boolean = false;
  showAdditionalContent: boolean = false;
  peopleLayouts: PeopleData[] = [];
  imageUrl = environment.image_url_server;
  isDropdownOpen: boolean = false;
  data!: any;
  isSideBar: boolean = false;
  isEdit: boolean = true; //Mode
  selectCategories: any = { name: '', code: '' };
  peopleName: string = '';
  selectedPeople: any = 'All';
  parentCat: string = 'All';
  filteredData: any;
  peoplesDescription: any;
  peopleKeyData: string[] = [];
  role_key: string[] = [];
  peopleOption: any;
  isPeopleVisible: boolean = false;
  peopleGroupListOption: any;
  selectedPeoplePageID:
    | {
        people_page_id: any;
      }
    | any = null;
  selectedPerson: any = null;
  category: any = [
    { name: 'Practice Management', code: '' },
    { name: 'Architecture Studio', code: '' },
    { name: 'Urbanism Studio', code: '' },
    { name: 'Studio Support', code: '' },
    { name: 'Practice Support', code: '' },
  ];
  hasChanges: boolean = false;

  @ViewChild('op') op: OverlayPanel | undefined;
  isMobileOrTablet: boolean = false;

  ngOnInit(): void {
    this.toTop();
    this.updateScreenSize();

    // Attach or detach scroll event listener based on screen size
    if (!this.isMobileOrTablet) {
      window.addEventListener('scroll', this.onWindowScroll.bind(this));
    }

    this.peopleMenuText = this.sub_menu_details?.map((item: any) => {
      return item;
    });

    if (this.parentCat === 'All') {
      this.service.getPeopleCoverImage().subscribe((data: any) => {
        this.cover_image = data[0].image_path;
      });
    }

    this.service.getHasmukh_c_patelPeople().subscribe((data: any) => {
      this.founder_info = data.data[0];
    });

    this.service.peopleList().subscribe((data: any) => {
      this.peopleOption = data.data;
    });

    this.isFilter = false;
    this.peopleLayouts = [];

    this.ispeopleLoading = true;
    this.selectedPeople = 'All';
    this.service.getPeoples(7).subscribe(
      (data: any) => {
        this.selectedPeople = 'All';
        this.peopleLayouts = data;
        
        Object.keys(this.peopleLayouts[0]).map((d) =>
          this.peopleKeyData.push(d)
        );
        
        this.role_key = this.peopleKeyData.filter((item) =>
          item.startsWith('role')
        );

        this.isLoading = false;
        // this.filterData();
        this.ispeopleLoading = false;
        // this.loader.hide();
        this.cdr.detectChanges();
      },
      (error: any) => {
        console.error('Error', error);
        this.loader.hide();
      }
    );
    // });
    window
      .matchMedia('(max-width: 768px)')
      .addEventListener('change', this.updateScreenSize.bind(this));
  }

  updateScreenSize() {
    this.isMobileOrTablet = window.matchMedia('(max-width: 768px)').matches;
    if (this.isMobileOrTablet) {
      // Remove scroll event listener for mobile and tablet
      window.removeEventListener('scroll', this.onWindowScroll.bind(this));
    } else {
      // Add scroll event listener for desktop
      window.addEventListener('scroll', this.onWindowScroll.bind(this));
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isMobileOrTablet) {
      this.op?.hide();
    }
  }

  handleData(event: any, person: any) {
    event.stopPropagation();

    this.data = person;
    this.showAdditionalContent = !this.showAdditionalContent;
    if (this.showAdditionalContent) {
      this.renderer.addClass(document.body, 'peopleContent');
    } else {
      this.renderer.removeClass(document.body, 'peopleContent');
    }
  }

  openClosePeoplePopup(data: any) {
    const people_page_id = data[0].people_page_id;
    this.selectedPeoplePageID = {
      people_page_id,
    };
    this.isPeopleVisible = !this.isPeopleVisible;
  }

  getGridClass() {
    return this.showAdditionalContent ? 'opacity-5' : '';
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onDropdownChange(event: any, op: OverlayPanel, parentCategory: string) {
    // this.cdr.detectChanges
    // this.ispeopleLoading = true;
    this.selectedPeople = event;
    this.parentCat = parentCategory;
    this.hoverDropdown = !this.hoverDropdown;
    op.hide();
    this.filterData();
  }

  getIdFromCategory(category: string): number {
    // 7 all , 1 - etc
    switch (category) {
      case 'All':
        return 7;
        break;
      case 'Practice Management':
        return 1;
      case 'Architecture Studio':
        return 2;
      case 'Urbanism Studio':
        return 3;
      case 'Studio Support':
        return 4;
      case 'Practice Support':
        return 5;
      default:
        return 7;
        break;
    }
  }

  filterData() {
    const searchTerm = this.peopleName.toLocaleLowerCase();

    if (searchTerm) {
      this.filteredData = {};
      this.isFilter = true;
      this.ispeopleLoading = false;

      // Check if the search term matches the founder's name
      if (this.founder_info.name.toLowerCase().includes(searchTerm)) {
        // Ensure there's a key for the founder's info
        if (!this.filteredData['row_0']) {
          this.filteredData['row_0'] = [];
        }
        this.filteredData['row_0'].push(this.founder_info);
      }

      // Filter other people based on the search term
      for (let people of this.peopleLayouts) {
        for (let key of this.peopleKeyData) {
          if (key.startsWith('row_')) {
            const filteredPeople = people[key].filter((person: any) =>
              person.name.toLowerCase().includes(searchTerm)
            );

            if (filteredPeople.length > 0) {
              // Ensure filteredData has the key
              if (!this.filteredData[key]) {
                this.filteredData[key] = [];
              }
              // Push the filtered people to the corresponding key
              this.filteredData[key].push(...filteredPeople);
            }
          }
        }
      }
      // this.selectedPeople = "All"
    } else if (this.selectedPeople) {
      this.ispeopleLoading = true;
      const categoryId: number = this.getIdFromCategory(this.parentCat);
      this.service.getPeoples(categoryId).subscribe((people_data) => {
        if (
          this.selectedPeople === 'All' ||
          this.selectedPeople === 'Practice Management' ||
          this.selectedPeople === 'Architecture Studio' ||
          this.selectedPeople === 'Urbanism Studio' ||
          this.selectedPeople === 'Studio Support' ||
          this.selectedPeople === 'Practice Support'
        ) {
          // Reset data for these categories
          // this.filteredData = {};
          this.isFilter = false;
          this.ispeopleLoading = false;
          this.peopleLayouts = people_data;
          this.peopleKeyData = Object.keys(people_data[0] || {});
          this.role_key = this.peopleKeyData.filter((item) =>
            item.startsWith('role')
          );
          this.toTop();
        } else {
          this.isFilter = true;
          this.ispeopleLoading = false;

          const uniFiltered: { [key: string]: any[] } = {};

          // Filter based on selectedPeople
          people_data.forEach((person: any) => {
            Object.entries(person).forEach(([key, data]: [string, any]) => {
              if (Array.isArray(data)) {
                data.forEach((item: any) => {
                  if (
                    typeof item.role_name === 'string' &&
                    item.role_name
                      .toLowerCase()
                      .startsWith((this.selectedPeople as string).toLowerCase())
                  ) {
                    if (!uniFiltered[item.key]) {
                      uniFiltered[item.key] = [];
                    }
                    uniFiltered[item.key].push(item);
                  }
                });
              }
            });
          });

          this.filteredData = uniFiltered;
          this.toTop();
        }
      });
    }
  }

  onClickDropDown(event: Event) {
    event.stopPropagation();
    this.isDropdownOn = !this.isDropdownOn;
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

  objectKeys(obj: any) {
    return Object.keys(obj);
  }

  sub_menu_details = [
    {
      all: [
        {
          name: 'All',
          code: '',
        },
      ],
    },
    {
      practicemanagement: [
        {
          name: 'All',
          code: '',
        },
      ],
    },
    {
      architechStudio: [
        {
          name: 'All',
          code: '',
        },
        {
          name: 'Studio Director',
          code: '',
        },
        {
          name: 'Associate Studio Directors',
          code: '',
        },
        {
          name: 'Studio Leads',
          code: '',
        },
        {
          name: 'Project Heads',
          code: '',
        },
        {
          name: 'Architects',
          code: '',
        },
        {
          name: 'Conservation Architects',
          code: '',
        },
        {
          name: 'Detailers & Specialists',
          code: '',
        },
      ],
    },
    {
      urbanismStudio: [
        {
          name: 'All',
          code: '',
        },
        {
          name: 'Studio Director',
          code: '',
        },
        {
          name: 'Associate Studio Directors',
          code: '',
        },
        {
          name: 'Studio Leads',
          code: '',
        },
        {
          name: 'Project Heads',
          code: '',
        },
        {
          name: 'Urban Designers & Planners',
          code: '',
        },
        {
          name: 'Landscape Architects',
          code: '',
        },
        {
          name: 'Detailers & Specialists',
          code: '',
        },
      ],
    },
    {
      studioSupport: [
        {
          name: 'All',
          code: '',
        },
        {
          name: 'Communications & Graphics',
          code: '',
        },
        {
          name: 'Consultant Management',
          code: '',
        },
        {
          name: 'Document Control Centre',
          code: '',
        },
        {
          name: 'Digital Modeling & Software',
          code: '',
        },
        {
          name: 'Library & Archives',
          code: '',
        },
        {
          name: 'Model Making',
          code: '',
        },
        {
          name: 'Photography',
          code: '',
        },
        {
          name: 'Project Management',
          code: '',
        },
        {
          name: 'Research',
          code: '',
        },
        {
          name: 'Site Representation',
          code: '',
        },
        {
          name: 'Quantity Surveying & Market Research',
          code: '',
        },
        {
          name: 'Visualization',
          code: '',
        },
      ],
    },
    {
      practiceSupport: [
        {
          name: 'All',
          code: '',
        },
        {
          name: 'Administration',
          code: '',
        },
        {
          name: 'Office Maintenance',
          code: '',
        },
        {
          name: 'Travel & Transport',
          code: '',
        },
        {
          name: 'HR & Capacity Building',
          code: '',
        },
        {
          name: 'Finance',
          code: '',
        },
        {
          name: 'IT',
          code: '',
        },
        {
          name: 'Business Development & Contracts',
          code: '',
        },
      ],
    },
  ];

  sideMenu(id: number) {
    this.isActive = this.isActive === id ? id : id;

    if (id === 1) {
      this.people_bar_menu = this.sub_menu_details[0].all;
    } else if (id === 2) {
      this.people_bar_menu = this.sub_menu_details[1].practicemanagement;
    } else if (id == 3) {
      this.people_bar_menu = this.sub_menu_details[2].architechStudio;
    } else if (id == 4) {
      this.people_bar_menu = this.sub_menu_details[3].urbanismStudio;
    } else if (id == 5) {
      this.people_bar_menu = this.sub_menu_details[4].studioSupport;
    } else if (id == 6) {
      this.people_bar_menu = this.sub_menu_details[5].practiceSupport;
    }
  }

  handleDropDownClick() {
    this.hoverDropdown = !this.hoverDropdown;
  }

  navigateUrl(url: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      // Navigate back to the original URL
      this.router.navigateByUrl(url);
    });
  }

  onFilesSelected(files: File | File[], index: number, layoutId: string) {
    const fileArray = Array.isArray(files) ? files : [files];
    const reader = new FileReader();

    fileArray.forEach((file, fileIndex) => {
      reader.onload = () => {
        const imageUrl = reader.result as string;

        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    });
  }

  sideBarToogle() {
    this.isSideBar = !this.isSideBar;
  }
  changeMode() {
    this.isEdit = !this.isEdit;
  }
  onPublish() {
    // this.hasChanges = false;
    this.spinner.show();

    //   this.service
    //     .postERPojectPageData(this.earlyProjects)
    //     .subscribe((data) => {
    //       if (data.message === 'success') {
    //         this.msgService.successToaster('Uploaded successfully');
    //         this.fetchData();
    //         this.spinner.hide();
    //       }
    //     });
  }

  clickDelete(people_id?: any, people_page_id?: any) {
    const data = {
      people_page_id: people_page_id,
      people_id: people_id,
    };
    const confirmed = window.confirm(
      'Are you sure you want to delete this people?'
    );
    if (confirmed) {
      this.spinner.show();
      this.service.deleteGroupPeople(data).subscribe((response: any) => {
        this.isPeopleVisible = false;
        this.spinner.hide();
        location.reload();
      });
    }
  }

  AddPeople() {
    const { people_page_id } = this.selectedPeoplePageID;
    if (this.selectedPerson) {
      const data = {
        people_page_id: people_page_id,
        people_id: this.selectedPerson.id,
      };
      this.spinner.show();
      this.service.addGroupPeople(data).subscribe((response: any) => {
        this.isPeopleVisible = false;
        this.spinner.hide();
        location.reload();
      });
    }
  }
}
