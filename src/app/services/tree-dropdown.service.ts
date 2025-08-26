import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface ITreeSelect {
  key: string;
  label: string;
  data: string;
  icon: string;
  children?: ITreeSelect[];
}

export interface ITreeBackend {
  weekly_news: [{ press_id: number; week_title: string }];
  arch: [{ project_id: number; ar_project_name: string }];
  urban: [{ project_id: number; ur_project_name: string }];
  early: [{ project_id: number; ur_project_name: string }];
  rp_books: [{ id: number; name: string }];
  rp_brochures: [{ id: number; name: string }];
  rp_papers: [{ id: number; name: string }];
  people: [{ people_id: number; name: string }];
  features: [{ id: number; name: string }];
  press: [{ id: number; name: string }];
  outreach: [{ id: number; name: string }];
  student_internships: [{ id: number; name: string }];
  job: [{ id: number; name: string }];
  award: [{ id: number; name: string }];
  exhibition: [{ id: number; name: string }];
}

export interface ITreeBackendData {
  data: ITreeBackend;
}

@Injectable({
  providedIn: 'root',
})
export class TreeDropdownService {
  data: ITreeSelect[] = [];

  constructor(private http: HttpClient) {}

  getProjectsFromBackend(): Observable<any> {
    let tree_data: any = [
      {
        data: {
          name: 'Home Page',
          size: '200mb',
          type: 'EDIT',
          url: '/homepage',
        },
      },
      {
        data: {
          name: 'Weekly news',
          size: '200mb',
          type: 'ADD',
          // url: '/press',
        },
        children: [],
      },
      {
        data: {
          name: 'Architechture Project Page',
          size: '20mb',
          type: 'Add',
        },
        children: [
          {
            data: {
              name: 'Architecture Landing Page',
              size: '',
              type: 'EDIT',
              url: '/architecture',
            },
          },
          {
            data: {
              name: 'Project Pages',
              size: '',
              type: 'ADD',
              project: 'architecture',
            },
            children: [],
          },
        ],
      },
      {
        data: {
          name: 'Urbanism Project Page',
          size: '20mb',
          type: 'Add',
        },
        children: [
          {
            data: {
              name: 'Urbanism Landing Page',
              size: '',
              type: 'EDIT',
              url: '/urbanism',
            },
          },
          {
            data: {
              name: 'Project Pages',
              size: '',
              type: 'ADD',
              project: 'urbanism',
            },
            children: [],
          },
        ],
      },
      {
        data: {
          name: 'Research & Publications Page',
          size: '20mb',
          type: 'Add',
        },
        children: [
          {
            data: {
              name: 'Research & Publications Landing Page',
              size: '',
              type: 'EDIT',
              url: '/research-publication',
            },
          },
          {
            data: {
              name: 'Books cover image',
              size: '',
              type: 'EDIT',
              project: 'books cover image',
            },
          },
          {
            data: {
              name: 'Books',
              size: '',
              type: 'ADD',
              project: 'books',
            },
            children: [],
          },
          {
            data: {
              name: 'Brochures cover image',
              size: '',
              type: 'EDIT',
              project: 'brochures cover image',
            },
          },
          {
            data: {
              name: 'Brochures',
              size: '',
              type: 'ADD',
              url: '/brochures',
            },
            children: [],
          },
          {
            data: {
              name: 'Papers cover image',
              size: '',
              type: 'EDIT',
              project: 'papers cover image',
            },
          },
          {
            data: {
              name: 'Papers',
              size: '',
              type: 'ADD',
              url: '/papers',
            },
            children: [],
          },
        ],
      },
      {
        data: {
          name: 'Early Project Page',
          size: '20mb',
          type: 'Add',
        },
        children: [
          {
            data: {
              name: 'Early Landing Page',
              size: '',
              type: 'EDIT',
              url: '/legacy',
            },
          },
          {
            data: {
              name: 'Project Pages',
              size: '',
              type: 'ADD',
              project: 'legacy',
            },
            children: [],
          },
        ],
      },
      {
        data: {
          name: 'Studios & Studio Support Page',
          size: '20mb',
          type: 'Add',
        },
        children: [
          {
            data: {
              name: 'Architecture Studio',
              size: '',
              type: 'EDIT',
              url: '/architecture-studio',
            },
          },
          {
            data: {
              name: 'Urbanism Studio',
              size: '',
              type: 'EDIT',
              url: '/urbanism-studio',
            },
          },
          {
            data: {
              name: 'Archives and Library',
              size: '',
              type: 'EDIT',
              url: '/archives',
            },
          },
          {
            data: {
              name: 'Communications',
              size: '',
              type: 'EDIT',
              url: '/communications-2',
            },
          },
          {
            data: {
              name: 'Conservation',
              size: '',
              type: 'EDIT',
              url: '/conservation',
            },
          },
          {
            data: {
              name: 'Digital Modelling & Software',
              size: '',
              type: 'EDIT',
              url: '/software-support',
            },
          },
          {
            data: {
              name: 'Landscape',
              size: '',
              type: 'EDIT',
              url: '/landscape',
            },
          },
          {
            data: {
              name: 'Model Making',
              size: '',
              type: 'EDIT',
              url: '/model-making',
            },
          },
          {
            data: {
              name: 'Photography',
              size: '',
              type: 'EDIT',
              url: '/photography',
            },
          },
          {
            data: {
              name: 'Project Management',
              size: '',
              type: 'EDIT',
              url: '/project-management',
            },
          },
          {
            data: {
              name: 'Site Representatives',
              size: '',
              type: 'EDIT',
              url: '/architecture-representatives',
            },
          },
          {
            data: {
              name: 'Visualization',
              size: '',
              type: 'EDIT',
              url: '/visualization',
            },
          },
        ],
      },
      {
        data: {
          name: 'Practice',
          size: '20mb',
          type: 'Add',
        },
        children: [
          {
            data: {
              name: 'About Us',
              size: '',
              type: 'EDIT',
              url: '/about',
            },
          },
          {
            data: {
              name: 'People',
              size: '',
              type: 'EDIT',
              url: 'peoples',
            },
          },
          {
            data: {
              name: 'People cover image',
              size: '',
              type: 'EDIT',
              // url: 'peoples',
              project: 'people cover image',
            },
          },
          {
            data: {
              name: 'People page data',
              size: '',
              type: 'ADD',
              project: 'people',
            },
            children: [],
          },
          {
            data: {
              name: 'Awards cover image',
              size: '',
              type: 'EDIT',
              project: 'Awards cover image',
            },
          },
          {
            data: {
              name: 'Awards',
              size: '',
              type: 'ADD',
              project: 'awards',
            },
            children: [],
          },
          {
            data: {
              name: 'Outreach',
              size: '',
              type: 'Add',
            },
            children: [
              {
                data: {
                  name: 'Exhibitions cover image',
                  size: '',
                  type: 'EDIT',
                  project: 'exhibitions cover image',
                },
              },
              {
                data: {
                  name: 'Exhibitions page data',
                  size: '',
                  type: 'ADD',
                  url: '/exhibitions',
                },
                children: [],
              },
              {
                data: {
                  name: 'Features Cover Image',
                  size: '',
                  type: 'EDIT',
                  project: 'features cover image',
                },
              },
              {
                data: {
                  name: 'Features page data',
                  size: '',
                  type: 'ADD',
                  url: '/features',
                },
                children: [],
              },
              {
                data: {
                  name: 'HCP in the Press cover image',
                  size: '',
                  type: 'EDIT',
                  project: 'HCP in the Press cover image',
                },
              },
              {
                data: {
                  name: 'HCP in the Press data',
                  size: '',
                  type: 'ADD',
                  url: '/news',
                },
                children: [],
              },
              {
                data: {
                  name: 'Talks & Seminars cover image',
                  size: '',
                  type: 'EDIT',
                  project: 'Talks & Seminars cover image',
                },
              },
              {
                data: {
                  name: 'Talks & Seminars data',
                  size: '',
                  type: 'ADD',
                  url: '/outreach',
                },
                children: [],
              },
            ],
          },
          {
            data: {
              name: 'Careers',
              size: '',
              type: 'Add',
            },
            children: [
              {
                data: {
                  name: 'Student Internships cover image',
                  size: '',
                  type: 'EDIT',
                  project: 'student internships cover image',
                },
              },
              {
                data: {
                  name: 'Student Internships',
                  size: '',
                  type: 'ADD',
                  url: '/student-internships',
                },
                children: [],
              },
              {
                data: {
                  name: 'Work Opportunities cover image',
                  size: '',
                  type: 'EDIT',
                  project: 'work opportunities cover image',
                },
              },
              {
                data: {
                  name: 'Work Opportunities',
                  size: '',
                  type: 'ADD',
                  url: '/carrer',
                },
                children: [],
              },
            ],
          },
          // {
          //   data: {
          //     name: 'Contact Us',
          //     size: '',
          //     type: 'EDIT',
          //     url: '/contact',
          //   },
          // },
        ],
      },
    ];

    return this.http
      .get<ITreeBackendData>(
        // 'https://hcpinteractive.com/HCP_Website/Common/get_dashboard_dropdown.php'
        // 'https://versatilesolutions.co.in/hcp.co.in/HCP_CMS_demo/HCP_Website/Common/get_dashboard_dropdown.php'

        // dummay cms link
        'https://cms.hcp.co.in/HCP_CMS/HCP_Website/Common/get_dashboard_dropdown.php'

        // live cms link
        // 'https://hcp.co.in/web_cms/api/Common/get_dashboard_dropdown.php'
      )
      .pipe(
        // cannot return in subscribe method so used pipe
        map((data: ITreeBackendData) => {
          data.data.weekly_news.forEach((weekly_news: any) => {
            // console.log('tree_data', tree_data);
            tree_data[1].children.push({
              data: {
                name: weekly_news.week_title,
                start: weekly_news.week_start,
                end: weekly_news.week_end,
                type: 'EDIT',
                project_id: weekly_news.press_id,
                size: '',
                project_type: 'press',
                url: `/press/${weekly_news.press_id}`,
              },
            });
          });
          data.data.arch.forEach((arch: any) => {
            // tree_data[2].children[1].children.push({
            tree_data[2].children[1].children.push({
              data: {
                name: arch.ar_project_name,
                type: 'EDIT',
                project_id: arch.project_id,
                size: '',
                project_type: 'architecture',
                url: `/architecture/${arch.project_id}`,
              },
            });
          });
          data.data.urban.forEach((urban: any) => {
            // tree_data[3].children[1].children.push({
            tree_data[3].children[1].children.push({
              data: {
                name: urban.ur_project_name,
                type: 'EDIT',
                project_id: urban.project_id,
                size: '',
                project_type: 'urbanism',
                url: `/urbanism/${urban.project_id}`,
              },
            });
          });
          data.data.early.forEach((early: any) => {
            // tree_data[5].children[1].children.push({
            tree_data[5].children[1].children.push({
              data: {
                name: early.early_project_name,
                type: 'EDIT',
                project_id: early.project_id,
                size: '',
                project_type: 'legacy',
                url: `/legacy/${early.project_id}`,
              },
            });
          });
          data.data.rp_books.forEach((rp_books: any) => {
            tree_data[4].children[2].children.push({
              data: {
                name: rp_books.name,
                type: 'EDIT',
                project_id: rp_books.id,
                size: '',
                project_type: 'books',
                url: `/books/${rp_books.id}`,
              },
            });
          });
          data.data.rp_brochures.forEach((rp_brochures: any) => {
            tree_data[4].children[4].children.push({
              data: {
                name: rp_brochures.name,
                type: 'EDIT',
                project_id: rp_brochures.id,
                size: '',
                project_type: 'brochures',
              },
            });
          });
          data.data.rp_papers.forEach((rp_papers: any) => {
            tree_data[4].children[6].children.push({
              data: {
                name: rp_papers.name,
                type: 'EDIT',
                project_id: rp_papers.id,
                size: '',
                project_type: 'papers',
              },
            });
          });
          data.data.people.forEach((people: any) => {
            tree_data[7].children[3].children.push({
              data: {
                name: people.name,
                type: 'EDIT',
                project_id: people.people_id,
                size: '',
                project_type: 'people',
                // url: `/people/${people.people_id}`,
              },
            });
          });
          data.data.award.forEach((award: any) => {
            tree_data[7].children[5].children.push({
              data: {
                name: award.name,
                type: 'EDIT',
                project_id: award.id,
                size: '',
                project_type: 'awards',
              },
            });
          });
          data.data.exhibition.forEach((exhibition: any) => {
            tree_data[7].children[6].children[1].children.push({
              data: {
                name: exhibition.name,
                type: 'EDIT',
                project_id: exhibition.id,
                size: '',
                project_type: 'exhibition',
              },
            });
          });
          data.data.features.forEach((features: any) => {
            tree_data[7].children[6].children[3].children.push({
              data: {
                name: features.name,
                type: 'EDIT',
                project_id: features.id,
                size: '',
                project_type: 'features',
              },
            });
          });
          data.data.press.forEach((press: any) => {
            tree_data[7].children[6].children[5].children.push({
              data: {
                name: press.name,
                type: 'EDIT',
                project_id: press.id,
                size: '',
                project_type: 'hcp_press',
              },
            });
          });
          data.data.outreach.forEach((outreach: any) => {
            tree_data[7].children[6].children[7].children.push({
              data: {
                name: outreach.name,
                type: 'EDIT',
                project_id: outreach.id,
                size: '',
                project_type: 'talks-seminars',
              },
            });
          });
          data.data.student_internships.forEach((student_internships: any) => {
            tree_data[7].children[7].children[1].children.push({
              data: {
                name: student_internships.name,
                type: 'EDIT',
                project_id: student_internships.id,
                size: '',
                project_type: 'student-internships',
              },
            });
          });
          data.data.job.forEach((work_opp: any) => {
            tree_data[7].children[7].children[3].children.push({
              data: {
                name: work_opp.name,
                type: 'EDIT',
                project_id: work_opp.id,
                size: '',
                project_type: 'work_opp',
              },
            });
          });
          return tree_data;
        })
      );
  }
}
