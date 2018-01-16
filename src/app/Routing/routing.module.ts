import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeSeekingSkillsComponent } from '../employee-seeking-skills/employee-seeking-skills.component';
import { EmployeeOfferingSkillsComponent } from '../employee-offering-skills/employee-offering-skills.component'
import { HomePageComponent } from '../home-page/home-page.component';
import { AdminComponent } from '../admin/admin.component';



const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: HomePageComponent },
    { path: 'request-training', component: EmployeeSeekingSkillsComponent },
    { path: 'offer-training', component: EmployeeOfferingSkillsComponent },
    { path: 'admin', component: AdminComponent },
  
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
