import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';
import { fadeInAnimation } from '../animations/fade-in.animation';
import { DataService } from '../data.service'

@Component({
  selector: 'app-employee-seeking-skills',
  templateUrl: './employee-seeking-skills.component.html',
  styleUrls: ['./employee-seeking-skills.component.css'],
  animations: [fadeInAnimation],
})
export class EmployeeSeekingSkillsComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  request;
  skills;
  response;
      

  errorMessage: string;

  ngOnInit() {
   
    this.getSkills();
    
    
    }

    getSkills() {
      this.dataService.getRecords("skills")
      .subscribe(skills => {this.skills = skills  
        this.dataService.getRecords("skills").subscribe()
      },
        error =>  this.errorMessage = <any>error);


        console.log(this.skills);
        console.log(this.errorMessage);
    }




  requestSubmit(userForm: NgForm){


      this.request = {
        "user":"N0211099",
        "menteeSkillRequested":userForm.value.skillRequested,
        "menteeSkillOtherText":userForm.value.skillRequestedOther,
        "menteeHoursRequested":userForm.value.hoursrequested,
        "menteeTimeRequested":userForm.value.timeFrame,
        "menteeRequestDescription":userForm.value.oppurtunity,
        "menteeRequestStatus":userForm.value.status,
        "menteeCompletedSummary":userForm.value.summary
      }

      this.dataService.addRecord("submit",this.request).subscribe(response => { this.response = response
        
       console.log(response); 
      }
        ,   
        error =>  this.errorMessage = <any>error);

    console.log( this.request);
}



}
