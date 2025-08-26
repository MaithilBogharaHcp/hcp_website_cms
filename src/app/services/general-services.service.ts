import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Homepage, HomepageData } from '../interfaces/homepage';
import { PostResponse } from '../interfaces/post-response';

@Injectable({
  providedIn: 'root',
})
export class GeneralServicesService {
  constructor(private http: HttpClient) {}
  // Api_Url = 'https://hcpinteractive.com/HCP_Website';
  // Api_Url =
  //   'https://versatilesolutions.co.in/hcp.co.in/HCP_CMS_demo/HCP_Website';
  // Api_Url = 'https://hcp.co.in/HCP_Website';

  // dummay cms link
  Api_Url = 'https://cms.hcp.co.in/HCP_CMS/HCP_Website';

  // live cms link
  // Api_Url = 'https://hcp.co.in/web_cms/api';

  getLogin(data: any): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/DashBord/login.php`,
      {
        username: data.username,
        password: data.password,
        url: data.url,
      }
    );
  }

  // home page crud operations

  getContactUs(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_contact_us/get_contact_us_detail.php`
    );
  }

  getAboutUs(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_about_us/get_about_us_detail.php`
    );
  }

  postAboutPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_about_us/update_about_us_detail.php`,
      { data: data }
    );
  }

  getHomeLandingPageData(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/homepage/get_homepage_details.php`
    );
  }

  postHomeLandingData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/homepage/update_homepage_details.php`,
      { data: data }
    );
  }

  // Research And Publication apis start
  getResearchAndPublicationPageData(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_research_and_publication_landing/get_research_and_publication_details.php`
    );
  }

  postResearchAndPublicationData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_research_and_publication_landing/update_research_and_publication_details.php`,
      { data: data }
    );
  }

  postWeeklyDate(type: any, selectDate: any): Observable<HomepageData> {
    return this.http.post<HomepageData>(
      `${this.Api_Url}/CMS/page_Press/get_calendar_details.php`,
      { dateType: type, selectDate: selectDate }
    );
  }

  getWeeklyDate(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_Press/get_calendar_details.php`
    );
  }

  postHomePageData(data: Homepage[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/homepage/upload_homepage_details.php`,
      { data: data }
    );
  }

  // ---------------------------------------------------------------------------------------------------------------------------------

  areaProject() {
    return this.http.get(
      `${this.Api_Url}/CMS/page_ar_project/get_area_type.php`
    );
  }

  TagsProject() {
    return this.http.get(
      `${this.Api_Url}/CMS/page_ar_project/get_ar_projects_tag.php`
    );
  }

  //--------------------------------------------------------------------------------------------------------------------------------
  // Architecture apis
  getArchitectureLandingPageData(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_architecture_landing/get_ar_landingpage_details.php`
    );
  }

  postARLandingPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_architecture_landing/update_ar_landingpage_details.php`,
      { data: data }
    );
  }

  getArchitectureprojectPageData(id?: string): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_ar_project/get_ar_projects_page.php?id=${id}`
    );
  }

  postARPojectPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_ar_project/update_ar_projects_page.php`,
      { data: data }
    );
  }

  ProjectName(type?: string) {
    return this.http.post(
      `${this.Api_Url}/CMS/page_architecture_landing/projects_list.php`,
      { type: type }
    );
  }

  createArchProject(name: string, layout_id: any, project_id: any) {
    return this.http.get(
      `${this.Api_Url}/CMS/page_ar_project/add_architecture_project.php?ar_project_name=${name}&layout_id=${layout_id}&project_id=${project_id}`
    );
  }

  createNewArchProjectID() {
    return this.http.get(
      `${this.Api_Url}/CMS/page_ar_project/get_new_ar_project_id.php`
    );
  }

  deleteArchProject(id: any) {
    return this.http.get(
      `${this.Api_Url}/CMS/page_ar_project/delete_ar_project.php?ar_project_id=${id}`
    );
  }

  deleteLayout(id: number): Observable<PostResponse> {
    return this.http.delete<PostResponse>(
      `${this.Api_Url}/CMS/homepage/delete_homepage_details.php?id=${id}`
    );
  }

  //-------------------------------------------------------------------------------------------------------------------------------

  // Urbanism api

  getUrbanismLandingPageData(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_urbanism_landing/get_ur_landingpage_details.php`
    );
  }

  postURLandingPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_urbanism_landing/update_ur_landingpage_details.php`,
      { data: data }
    );
  }

  getUrbanismprojectPageData(id?: string): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_ur_project/get_ur_project.php?id=${id}`
    );
  }

  createUrbanProject(name: string, layout_id: any, project_id: any) {
    return this.http.get(
      `${this.Api_Url}/CMS/page_ur_project/add_urbanism_project.php?ur_project_name=${name}&layout_id=${layout_id}&project_id=${project_id}`
    );
  }

  createNewUrbnProjectID() {
    return this.http.get(
      `${this.Api_Url}/CMS/page_ur_project/get_new_ur_project_id.php`
    );
  }

  deleteUrbnProject(id: any) {
    return this.http.get(
      `${this.Api_Url}/CMS/page_ur_project/delete_ur_project.php?ur_project_id=${id}`
    );
  }

  postURPojectPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_ur_project/update_ur_projects_page.php`,
      { data: data }
    );
  }

  //-------------------------------------------------------------------------------------------------------------------------------

  // early project apis

  getLegacyLandingPageData(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_lagacy_landing/get_lp_landingpage_details.php`
    );
  }

  postLGLandingPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_lagacy_landing/upload_lp_landingpage_details.php`,
      { data: data }
    );
  }

  getEarlyprojectPageData(id?: string): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_legacy_project/get_legacy_project.php?id=${id}`
    );
  }

  createEarlyProject(name: string, layout_id: any, project_id: any) {
    return this.http.get(
      `${this.Api_Url}/CMS/page_legacy_project/add_legact_project.php?lp_project_name=${name}&layout_id=${layout_id}&project_id=${project_id}`
    );
  }

  createNewEarlyProjectID() {
    return this.http.get(
      `${this.Api_Url}/CMS/page_legacy_project/get_new_lp_project_id.php`
    );
  }

  deleteEarlyProject(id: any) {
    return this.http.get(
      `${this.Api_Url}/CMS/page_legacy_project/delete_lp_project.php?lp_project_id=${id}`
    );
  }

  postERPojectPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_legacy_project/update_lp_projects_page.php`,
      { data: data }
    );
  }

  //-------------------------------------------------------------------------------------------------------------------------------

  // weekly news page apis

  getPress(press_id: any): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_Press/get_single_news_details.php?press_id=${press_id}`
    );
  }

  createNewPressID() {
    return this.http.get(`${this.Api_Url}/CMS/page_Press/get_new_press_id.php`);
  }

  createPressWeek(week_start: string, week_end: any, press_id: any) {
    return this.http.get(
      `${this.Api_Url}/CMS/page_Press/add_weekly_news.php?week_start=${week_start}&week_end=${week_end}&press_id=${press_id}`
    );
  }

  deletePress(id: any) {
    return this.http.get(
      `${this.Api_Url}/CMS/page_Press/delete_single_news_details.php?press_id=${id}`
    );
  }

  postPressPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_Press/update_single_news_details.php`,
      { data: data }
    );
  }

  //-------------------------------------------------------------------------------------------------------------------------------

  // peoples api

  getPeoples(id: number): Observable<any> {
    return this.http.post<any>(
      // `https://versatilesolutions.co.in/hcp.co.in/HCP_Website/CMS/page_people/get_people_data_structured.php`,
      `${this.Api_Url}/CMS/page_people/get_people_data_structured.php`,
      { id: id }
    );
  }

  getPeopleCoverImage() {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_people/get_people_cover.php`
    );
  }

  getDesignationPeople() {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_people/get_people_designation.php`
    );
  }

  getSinglePeople(id: any) {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_people/get_people_details.php?people_id=${id}`
    );
  }

  getHasmukh_c_patelPeople() {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_people/get_hasmukh_c_patel_detail.php`
    );
  }

  addPeople(data: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_people/update_people_details.php`,
      { data: data }
    );
  }

  addGroupPeople(data: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_people/update_people_page.php`,
      { people_id: data.people_id, people_page_id: data.people_page_id }
    );
  }

  deletePeople(id: any) {
    return this.http.delete<any>(
      `${this.Api_Url}/CMS/page_people/delete_people.php?people_id=${id}`
    );
  }

  deleteGroupPeople(data: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_people/delete_people_page.php`,
      { people_id: data.people_id, people_page_id: data.people_page_id }
    );
  }

  peopleList() {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_people/all_people_list.php`
    );
  }

  peopleCoverImage() {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_people/get_people_cover_image.php`
    );
  }

  peopleCoverImageUpdate(image: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_people/update_people_cover_image.php`,
      { cover: image }
    );
  }

  //-------------------------------------------------------------------------------------------------------------------------------

  // feature page apis

  getFeatures(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_features/get_features_page_details.php`
    );
  }

  addFeatures(data: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_features/update_individual_features_details.php`,
      { data: data }
    );
  }

  getSingleFeatures(id: any) {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_features/get_individual_features_details.php?features_id=${id}`
    );
  }

  deletefeatures(id: any) {
    return this.http.delete<any>(
      `${this.Api_Url}/CMS/page_features/delete_individual_features_details.php?features_id=${id}`
    );
  }

  featuresCoverImage() {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_features/get_cover_image.php`
    );
  }

  featuresCoverImageUpdate(image: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_features/update_cover_image.php`,
      { cover: image }
    );
  }

  //------------------------------------------------------------------------------------------------------------------------------

  // hcp_press apis

  getNews(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_news/get_news_page_details.php`
    );
  }

  hcp_pressCoverImage() {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_news/get_press_cover_image.php`
    );
  }

  hcp_pressCoverImageUpdate(image: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_news/update_press_cover_image.php`,
      { cover: image }
    );
  }

  getSingleHcp_Press(id: any) {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_news/get_individual_press_details.php?news_id=${id}`
    );
  }

  addHcp_Press(data: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_news/update_individual_press_details.php`,
      { data: data }
    );
  }

  deleteHcp_Press(id: any) {
    return this.http.delete<any>(
      `${this.Api_Url}/CMS/page_news/delete_individual_press_details.php?news_id=${id}`
    );
  }

  //------------------------------------------------------------------------------------------------------------------------------
  // outreach talks and seminar
  getOutreach(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_outreach/get_outreach_page.php`
    );
  }

  getOutreachCoverImage() {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_outreach/get_outreach_cover_image.php`
    );
  }

  postOutreachCoverImageUpdate(image: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_outreach/update_outreach_cover_image.php`,
      { cover: image }
    );
  }

  getSingleTalkSeminar(id: any) {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_outreach/get_individual_outreach_details.php?outreach_id=${id}`
    );
  }

  addTalkSeminar(data: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_outreach/update_individual_outreach_details.php`,
      { data: data }
    );
  }

  deleteTalksSeminar(id: any) {
    return this.http.delete<any>(
      `${this.Api_Url}/CMS/page_outreach/delete_individual_outreach_details.php?outreach_id=${id}`
    );
  }

  // -----------------------------------------------------------------------------------------------------------------------------
  // awards

  getAwards(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_awards/get_awards_page.php`
    );
  }

  getAwardCoverImage() {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_awards/get_award_cover_image.php`
    );
  }

  postAwardCoverImageUpdate(image: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_awards/update_award_cover_image.php`,
      { cover: image }
    );
  }

  getSingleAward(id: any) {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_awards/get_individual_award_details.php?awards_id=${id}`
    );
  }

  addAward(data: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_awards/update_individual_award_details.php`,
      { data: data }
    );
  }

  deleteAward(id: any) {
    return this.http.delete<any>(
      `${this.Api_Url}/CMS/page_awards/delete_individual_award_details.php?awards_id=${id}`
    );
  }

  // -----------------------------------------------------------------------------------------------------------------------------
  // Exibition

  getExibitionCoverImage() {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_exhibitions/get_exhibitions_cover_image.php`
    );
  }

  postExibitionCoverImageUpdate(image: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_exhibitions/update_exhibitions_cover_image.php`,
      { cover: image }
    );
  }

  getExibition(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_exhibitions/get_exhibitions_page_details.php`
    );
  }

  getSingleExibition(id: any) {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_exhibitions/get_individual_exhibitions_details.php?exhibitions_id=${id}`
    );
  }

  addExibition(data: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_exhibitions/update_individual_exhibitions_details.php`,
      { data: data }
    );
  }

  deleteExibition(id: any) {
    return this.http.delete<any>(
      `${this.Api_Url}/CMS/page_exhibitions/delete_individual_exhibitions_details.php?exhibitions_id=${id}`
    );
  }

  getExibitionDetails(id: string): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_exhibitions/get_individual_exhibitions_details.php?exhibitions_id=${id}`
    );
  }

  // -----------------------------------------------------------------------------------------------------------------------------
  // books api

  getBooks(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_books/get_books_page.php`
    );
  }

  getBooksDetails(id: string): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_books/get_individual_books_details.php?id=${id}`
    );
  }

  postBooksDetailsData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_books/update_individual_books_details.php`,
      { data: data }
    );
  }

  createNewBookID() {
    return this.http.get(`${this.Api_Url}/CMS/page_books/get_new_books_id.php`);
  }

  createBooks(name: string, layout_id: any, project_id: any) {
    return this.http.get(
      `${this.Api_Url}/CMS/page_books/add_new_books.php?books_name=${name}&layout_id=${layout_id}&books_id=${project_id}`
    );
  }

  getBookCoverImage() {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_books/get_books_cover_image.php`
    );
  }

  postBookCoverImageUpdate(image: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_books/update_books_cover_image.php`,
      { cover: image }
    );
  }

  getSingleBooks(id: any) {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_books/get_individual_books_details.php?books_id=${id}`
    );
  }

  addBook(data: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_books/update_individual_books_details.php`,
      { data: data }
    );
  }

  deleteBook(id: any) {
    return this.http.delete<any>(
      `${this.Api_Url}/CMS/page_books/delete_individual_books_details.php?books_id=${id}`
    );
  }

  // -----------------------------------------------------------------------------------------------------------------------------
  // Brochures api

  getBrochures(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_brochures/get_brochures_page_details.php`
    );
  }

  getBrochuresDetails(id: string): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_brochures/get_brochures_individual_page.php?id=${id}`
    );
  }

  getBrochuresCoverImage() {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_brochures/get_brochures_cover_image.php`
    );
  }

  postBrochuresCoverImageUpdate(image: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_brochures/update_brochures_cover_image.php `,
      { cover: image }
    );
  }

  getSingleBrochures(id: any) {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_brochures/get_individual_brochures_details.php?brochure_id=${id}`
    );
  }

  addBrochures(data: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_brochures/update_individual_brochures_details.php`,
      { data: data }
    );
  }

  deleteBrochures(id: any) {
    return this.http.delete<any>(
      `${this.Api_Url}/CMS/page_brochures/delete_individual_brochures_details.php?brochure_id=${id}`
    );
  }

  // -----------------------------------------------------------------------------------------------------------------------------
  // paper api

  getResearch(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_research/get_research_page_details.php`
    );
  }

  getPaperCoverImage() {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_research/get_papers_cover_image.php`
    );
  }

  postPaperCoverImageUpdate(image: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_research/update_papers_cover_image.php`,
      { cover: image }
    );
  }

  getSinglePaper(id: any) {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_research/get_individual_papers_details.php?research_id=${id}`
    );
  }

  addPaper(data: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_research/update_individual_papers_details.php`,
      { data: data }
    );
  }

  deletePaper(id: any) {
    return this.http.delete<any>(
      `${this.Api_Url}/CMS/page_research/delete_individual_papers_details.php?research_id=${id}`
    );
  }

  // -----------------------------------------------------------------------------------------------------------------------------
  // student internship api

  getstuInternCoverImage() {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_student_internship/get_si_cover_image.php
 `
    );
  }

  poststuInternCoverImageUpdate(image: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_student_internship/update_si_cover_image.php`,
      { cover: image }
    );
  }

  getSinglestuIntern(id: any) {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_student_internship/get_individual_si_details.php?si_id=${id}`
    );
  }

  addstuIntern(data: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_student_internship/update_individual_si_details.php`,
      { data: data }
    );
  }

  deletestuIntern(id: any) {
    return this.http.delete<any>(
      `${this.Api_Url}/CMS/page_student_internship/delete_individual_si_details.php?si_id=${id}`
    );
  }

  getStudent_Inetrn(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_student_internship/get_student_internship.php`
    );
  }

  getWorkopp(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_work_opportunities/get_work_opportunities.php`
    );
  }

  getWorkoppImage() {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_work_opportunities/get_work_opportunities_details.php`
    );
  }

  postWorkoppCoverImageUpdate(data: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_work_opportunities/update_work_opportunities_details.php`,
      { data: data }
    );
  }

  getSingleWorkopp(id: any) {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_work_opportunities/get_individual_job_details.php?work_req_id=${id}`
    );
  }

  addWorkopp(data: any) {
    return this.http.post<any>(
      `${this.Api_Url}/CMS/page_work_opportunities/update_individual_job_details.php`,
      { data: data }
    );
  }

  deleteWorkopp(id: any) {
    return this.http.delete<any>(
      `${this.Api_Url}/CMS/page_work_opportunities/delete_individual_job_details.php?work_req_id=${id}`
    );
  }

  // ----------------------------------------- studio pages ------------------------------------------------------------------
  getArchitecStudioData(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_architecture_studio/get_architecture_detail.php`
    );
  }

  postARStudioPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_architecture_studio/update_architecture_detail.php`,
      { data: data }
    );
  }

  getUrbanismStudioData(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_urbanism_studio/get_urbanism_detail.php`
    );
  }

  postUrStudioPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_urbanism_studio/update_urbanism_detail.php`,
      { data: data }
    );
  }

  getArchives(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_archives/get_archives_detail.php`
    );
  }

  postArchivesPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_archives/update_archives_detail.php`,
      { data: data }
    );
  }

  getCommunicationLandingPageData(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_communication_landing/get_communication_details.php`
    );
  }

  postCommunicationPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_communication_landing/update_communication_details.php`,
      { data: data }
    );
  }

  getConservation(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_conservation/get_conservaton_page_details.php`
    );
  }

  postConservationPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_conservation/update_conservaton_page_details.php`,
      { data: data }
    );
  }

  getsoftwareSupport(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_software_support/get_software_support_details.php`
    );
  }

  postsoftwareSupportPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_software_support/update_software_support_details.php`,
      { data: data }
    );
  }

  getLandscap(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_landscape/get_landscape_details.php`
    );
  }

  postLandscapPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_landscape/update_landscape_details.php`,
      { data: data }
    );
  }

  getModelMaking(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_model_making/get_model_making_detail.php`
    );
  }

  postModelMakingPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_model_making/update_model_making_detail.php`,
      { data: data }
    );
  }

  getPhotography(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_photography/get_photography_details.php`
    );
  }

  postPhotographyPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_photography/update_photography_details.php`,
      { data: data }
    );
  }

  getProjectManagment(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_project_management/get_project_managment_details.php`
    );
  }

  postProjectManagmentPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_project_management/update_project_managment_details.php`,
      { data: data }
    );
  }
  getar_Representatives(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_architecture_representatives/get_site_representatives_details.php`
    );
  }
  postar_RepresentativesPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_architecture_representatives/update_site_representatives_details.php`,
      { data: data }
    );
  }
  getVisualization(): Observable<any> {
    return this.http.get<any>(
      `${this.Api_Url}/CMS/page_visualization/get_visualization_details.php`
    );
  }
  postVisualizationPageData(data: any[]): Observable<PostResponse> {
    return this.http.post<PostResponse>(
      `${this.Api_Url}/CMS/page_visualization/update_visualization_details.php`,
      { data: data }
    );
  }
  // -----------------------------------------------------------------------------------------------------------------------------
}
