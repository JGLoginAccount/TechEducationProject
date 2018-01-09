import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { EmployeeSeekingSkillsComponent } from './employee-seeking-skills/employee-seeking-skills.component';
import { EmployeeNeedingSkillComponent } from './employee-needing-skill/employee-needing-skill.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeSeekingSkillsComponent,
    EmployeeNeedingSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
