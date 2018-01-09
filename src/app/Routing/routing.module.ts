import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EmployeeSeekingSkillsComponent } from '../employee-seeking-skills/employee-seeking-skills.component';


const routes: Routes = [

  { path: 'request-training', component: EmployeeSeekingSkillsComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
