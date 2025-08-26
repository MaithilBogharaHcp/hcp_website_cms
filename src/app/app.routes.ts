import { Routes } from '@angular/router';
import { PageSelectionComponent } from './components/pages/page-selection/page-selection.component';
import { ArchitectureProjectPageComponent } from './components/pages/architecture-project-page/architecture-project-page.component';
import { UrbanismProjectPageComponent } from './components/pages/urbanism-project-page/urbanism-project-page.component';
import { UrbanLandingPageComponent } from './components/pages/urban-landing-page/urban-landing-page.component';
import { EarlyProjectPageComponent } from './components/pages/early-project-page/early-project-page.component';
import { PressComponent } from './components/pages/press-news/press-news.component';
import { PeoplesComponent } from './components/pages/peoples/peoples.component';
import { FeaturesComponent } from './components/pages/features/features.component';
import { OutreachComponent } from './components/pages/outreach/outreach.component';
import { AwardsComponent } from './components/pages/awards/awards.component';
import { ExibitionComponent } from './components/pages/exibition/exibition.component';
import { ExibitionDetailsComponent } from './components/pages/exibition-details/exibition-details.component';
import { ArLandingPageComponent } from './components/pages/ar-landing-page/ar-landing-page.component';
import { LgLandingPageComponent } from './components/pages/lg-landing-page/lg-landing-page.component';
import { NewsComponent } from './components/pages/news/news.component';
import { BooksComponent } from './components/pages/books/books.component';
import { BrochuresComponent } from './components/pages/brochures/brochures.component';
import { BrochuresDetailsComponent } from './components/pages/brochures-details/brochures-details.component';
import { ResearchComponent } from './components/pages/research/research.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ResearchPublicationComponent } from './components/pages/research-publication/research-publication.component';
import { StudentInternshipComponent } from './components/pages/student-internship/student-internship.component';
import { WorkOpportunitiesComponent } from './components/pages/work-opportunities/work-opportunities.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { ArchitectureStudioComponent } from './components/pages/architecture-studio/architecture-studio.component';
import { UrbamismStudioComponent } from './components/pages/urbamism-studio/urbamism-studio.component';
import { ArchivesComponent } from './components/pages/archives/archives.component';
import { CommunicationsComponent } from './components/pages/communications/communications.component';
import { ConservationComponent } from './components/pages/conservation/conservation.component';
import { SoftwareSupportComponent } from './components/pages/software-support/software-support.component';
import { LandscapeComponent } from './components/pages/landscape/landscape.component';
import { ModelMakingComponent } from './components/pages/model-making/model-making.component';
import { PhotographyComponent } from './components/pages/photography/photography.component';
import { ProjectManagmentComponent } from './components/pages/project-managment/project-managment.component';
import { ArchitectureRepresentativesComponent } from './components/pages/architecture-representatives/architecture-representatives.component';
import { VisualizationComponent } from './components/pages/visualization/visualization.component';
import { BooksDetailComponent } from './components/pages/books-detail/books-detail.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: PageSelectionComponent, canActivate: [AuthGuard] },
  { path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'press/:id', component: PressComponent, canActivate: [AuthGuard] },
  {
    path: 'architecture/:id',
    component: ArchitectureProjectPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'urbanism/:id',
    component: UrbanismProjectPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'legacy/:id',
    component: EarlyProjectPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'peoples', component: PeoplesComponent, canActivate: [AuthGuard] },
  { path: 'news', component: NewsComponent, canActivate: [AuthGuard] },
  { path: 'features', component: FeaturesComponent, canActivate: [AuthGuard] },
  { path: 'outreach', component: OutreachComponent, canActivate: [AuthGuard] },
  { path: 'awards', component: AwardsComponent, canActivate: [AuthGuard] },
  {
    path: 'exhibitions',
    component: ExibitionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'exhibitions/:id',
    component: ExibitionDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'architecture',
    component: ArLandingPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'urbanism',
    component: UrbanLandingPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'legacy',
    component: LgLandingPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'books', component: BooksComponent, canActivate: [AuthGuard] },
  {
    path: 'brochures',
    component: BrochuresComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'brochures/:id',
    component: BrochuresDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'papers', component: ResearchComponent, canActivate: [AuthGuard] },
  {
    path: 'research-publication',
    component: ResearchPublicationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'student-internships',
    component: StudentInternshipComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'careers',
    component: WorkOpportunitiesComponent,
    canActivate: [AuthGuard],
  },
  { path: 'about', component: AboutusComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactUsComponent, canActivate: [AuthGuard] },
  {
    path: 'architecture-studio',
    component: ArchitectureStudioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'urbanism-studio',
    component: UrbamismStudioComponent,
    canActivate: [AuthGuard],
  },
  { path: 'archives', component: ArchivesComponent, canActivate: [AuthGuard] },
  {
    path: 'communications-2',
    component: CommunicationsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'conservation',
    component: ConservationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'software-support',
    component: SoftwareSupportComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'landscape',
    component: LandscapeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'model-making',
    component: ModelMakingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'photography',
    component: PhotographyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'project-management',
    component: ProjectManagmentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'architecture-representatives',
    component: ArchitectureRepresentativesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'visualization',
    component: VisualizationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'books/:id',
    component: BooksDetailComponent,
    canActivate: [AuthGuard],
  },
];
