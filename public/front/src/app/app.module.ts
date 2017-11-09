import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {ServicesComponent} from "./services/services.component";
import {WebComponent} from "./services/web/web.component";
import {SeoComponent} from "./services/seo/seo.component";
import {SmmComponent} from "./services/smm/smm.component";
import {DedicatedTeamComponent} from "./services/dedicated-team/dedicated-team.component";
import {WorksComponent} from "./works/works.component";
import {ExpertiseComponent} from "./expertise/expertise.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {BlogComponent} from "./blog/blog.component";
import {AdminComponent} from "./admin/admin.component";
import {Router, RouterModule, Routes} from "@angular/router";
import {ContactsComponent} from "./contacts/contacts.component";
import {CookieService} from "angular2-cookie/core";
import {Http, HttpModule, RequestOptions, XHRBackend} from "@angular/http";
import {HttpClient} from "../shared/services/http-client";
import {CompanyComponent} from "./about-us/company/company.component";
import {OurTeamComponent} from "./about-us/our-team/our-team.component";
import {HeaderComponent} from "./sources/header/header.component";
import {FooterComponent} from "./sources/footer/footer.component";
import {TeamWorkerOneComponent} from "./about-us/our-team/team-worker-one/team-worker-one.component";
import {WorkOneComponent} from "./works/work-one/work-one.component";
import {BlogOneComponent} from "./blog/blog-one/blog-one.component";
import {BlogOneFullComponent} from "./blog/blog-one-full/blog-one-full.component";
import {AddComponent} from "./admin/add/add.component";
import {AddBlogComponent} from "./admin/add/add-blog/add-blog.component";
import {AddWorkComponent} from "./admin/add/add-work/add-work.component";
import {AddWorkerComponent} from "./admin/add/add-worker/add-worker.component";
import {BlogContainerComponent} from "./blog/blog-container/blog-container.component";
import {SafeHtmlModule} from "../shared/pipes/safeHtml.module";
import {WorkOneFullComponent} from "./works/work-one-full/work-one-full.component";
import {WorkContainerComponent} from "./works/work-container/work-container.component";
import {AdminToolsComponent} from "./admin/admin-tools/admin-tools.component";
import {MainComponent} from "./main/main.component";
import {GetInTouchSourceComponent} from "./sources/get-in-touch-source/get-in-touch-source.component";

const routes: Routes = [
  {
    path: "admin", component: AdminComponent, children: [
    {
      path: "add", component: AddComponent, children: [
      {path: "blog", component: AddBlogComponent},
      {path: "work", component: AddWorkComponent},
      {path: "worker", component: AddWorkerComponent},
    ]
    },
  ]
  },
  {
    path: "", component: MainComponent, children: [


    {path: "", component: HomeComponent},
    {
      path: "about-us", component: AboutUsComponent, children: [
      {path: "company", component: CompanyComponent},
      {path: "team", component: OurTeamComponent},
    ]
    },

    {
      path: "blog", component: BlogComponent, children: [
      {path: "", component: BlogContainerComponent},
      {path: "one/:id", component: BlogOneFullComponent},
    ]
    },
    {path: "expertise", component: ExpertiseComponent},
    {path: "contacts", component: ContactsComponent},
    {
      path: "services", component: ServicesComponent, children: [
      {path: "", component: WebComponent},
      {path: "dedicated-team", component: DedicatedTeamComponent},
      {path: "seo", component: SeoComponent},
      {path: "smm", component: SmmComponent},
    ]
    },
    {
      path: "works", component: WorksComponent, children: [
      {path: "", component: WorkContainerComponent},
      {path: "one/:id", component: WorkOneFullComponent},
    ]
    },

  ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    WebComponent,
    SeoComponent,
    SmmComponent,
    DedicatedTeamComponent,
    WorksComponent,
    ExpertiseComponent,
    AboutUsComponent,
    BlogComponent,
    GetInTouchSourceComponent,
    AdminComponent,
    ContactsComponent,
    CompanyComponent,
    OurTeamComponent,
    HeaderComponent,
    FooterComponent,
    TeamWorkerOneComponent,
    WorkOneComponent,
    BlogOneComponent,
    BlogOneFullComponent,
    AddComponent,
    AddBlogComponent,
    AddWorkComponent,
    AddWorkerComponent,
    BlogContainerComponent,
    WorkOneFullComponent,
    WorkContainerComponent,
    AdminToolsComponent,
    MainComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    SafeHtmlModule,
  ],
  providers: [CookieService, {
    provide: Http,
    useFactory: factory,
    deps: [XHRBackend, RequestOptions, Router]
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function factory(backend: XHRBackend, defaultOptions: RequestOptions, router: Router) {
  return new HttpClient(backend, defaultOptions, router);
}
