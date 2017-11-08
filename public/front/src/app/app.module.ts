import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { WebComponent } from './services/web/web.component';
import { SeoComponent } from './services/seo/seo.component';
import { SmmComponent } from './services/smm/smm.component';
import { DedicatedTeamComponent } from './services/dedicated-team/dedicated-team.component';
import { WorksComponent } from './works/works.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsblogComponent } from './about-usblog/about-usblog.component';
import { BlogComponent } from './blog/blog.component';
import { GrtInTouchComponent } from './grt-in-touch/grt-in-touch.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { AdminComponent } from './admin/admin.component';

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
    AboutUsblogComponent,
    BlogComponent,
    GrtInTouchComponent,
    GetInTouchComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
