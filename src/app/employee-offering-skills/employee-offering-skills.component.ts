import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { fadeInAnimation } from '../animations/fade-in.animation';
import { DataService } from '../data.service'

@Component({
  selector: 'app-employee-offering-skills',
  templateUrl: './employee-offering-skills.component.html',
  styleUrls: ['./employee-offering-skills.component.css'],
  animations: [fadeInAnimation],
})
export class EmployeeOfferingSkillsComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  skills;
  request;
  errorMessage: string;
  profiles;
  request2;
id:number;



    getRecordForEdit(){

      this.id=5;
      this.route.params
        .switchMap((params: Params) => this.dataService.getRecord("mentor", this.id))
        .subscribe(profiles => this.profiles = profiles);

        console.log(this.profiles);
        
    }
  
    ngOnInit() {

      this.getSkills();
        }
       
  

    getSkills() {
      this.dataService.getRecords("skills")
      .subscribe(skills => {this.skills = skills  
        this.getRecordForEdit();
      },   
        error =>  this.errorMessage = <any>error);
        console.log(this.skills);
        console.log(this.errorMessage);


    }


  

    requestSubmit(userForm: NgForm){


      this.request = {
        "user":"N0211099",
        "mentorContactMethod":userForm.value.contact_method,
        "mentorBestContact":userForm.value.best_contact,
        
        "mentorTimeFrameAvailable":userForm.value.timeFrame,
        "mentorAvailabilityHours":userForm.value.hours_available,
        "mentorAvailability":userForm.value.availability_status
      }

      this.request2 = {
        "mentorSkillSetExperience":userForm.value.skillsOffered
      }

     
      this.dataService.editRecordMentor("mentor",this.request,this.request2,5).subscribe();

    console.log( this.request);
}





    }
