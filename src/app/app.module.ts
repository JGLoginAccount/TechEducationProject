import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { EmployeeSeekingSkillsComponent } from './employee-seeking-skills/employee-seeking-skills.component';
import { EmployeeOfferingSkillsComponent } from './employee-offering-skills/employee-offering-skills.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeSeekingSkillsComponent,
    EmployeeOfferingSkillsComponent,
    HomePageComponent
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
