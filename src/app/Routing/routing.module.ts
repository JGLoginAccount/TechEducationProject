import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeSeekingSkillsComponent } from '../employee-seeking-skills/employee-seeking-skills.component';
import { EmployeeOfferingSkillsComponent } from '../employee-offering-skills/employee-offering-skills.component'
import { HomePageComponent } from '../home-page/home-page.component';
import { LoginComponent } from '../login/login.component';
import { ResourceLinksComponent } from '../resource-links/resource-links.component';
import { AdminComponent } from '../admin/admin.component';
import { AdminMentorsComponent } from '../admin-mentors/admin-mentors.component';
import { AdminRequestsComponent } from '../admin-requests/admin-requests.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },

        { path: 'request-training', component: EmployeeSeekingSkillsComponent },
        { path: 'offer-training', component: EmployeeOfferingSkillsComponent },
        { path: 'admin', component: AdminComponent },
        { path: 'admin-requests', component: AdminRequestsComponent },
        { path: 'admin-mentors', component: AdminMentorsComponent },
        { path: 'resource-links', component: ResourceLinksComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
