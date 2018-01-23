import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeSeekingSkillsComponent } from './employee-seeking-skills/employee-seeking-skills.component';
import { EmployeeOfferingSkillsComponent } from './employee-offering-skills/employee-offering-skills.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DataService } from './data.service';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { BasePageComponent } from './base-page/base-page.component';
import { ResourceLinksComponent } from './resource-links/resource-links.component';
import { AdminMentorsComponent } from './admin-mentors/admin-mentors.component';
import { AdminRequestsComponent } from './admin-requests/admin-requests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './Routing/routing.module';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeSeekingSkillsComponent,
    EmployeeOfferingSkillsComponent,
    HomePageComponent,
    NavigationComponent,
    AdminComponent,
    LoginComponent,
    BasePageComponent,
    ResourceLinksComponent,
    AdminMentorsComponent,
    AdminRequestsComponent,
    AdminMentorsComponent,
    AdminRequestsComponent,
        
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
  