import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { fadeInAnimation } from '../animations/fade-in.animation';
import { DataService } from '../data.service'
import { skills } from '../skills';
import { MentorSkills } from '../mentor-skills';
import { Mentor } from '../mentor';



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
  skillmaster: skills;
  profile1;
  request;
  errorMessage: string;
  request2;
  profiles: Mentor;
  id;
  contactMethod;
  timeFrame;
  skillsValue;



  getRecordForEdit() {

    this.route.params
      .switchMap((params: Params) => this.dataService.getRecord("mentor", this.id))
      .subscribe(profiles => {
        this.profile1 = profiles;
        this.profiles = this.profile1[0];
        this.getSkills();
      });


  }

  ngOnInit() {

    
    this.getContactMethod();
    this.getTimeFrame();
    this.getUser();


  }
  getContactMethod() {
    this.dataService.getRecords("contactMethod")
      .subscribe(contactMethod => {
        this.contactMethod = contactMethod;
      })
    }

    getTimeFrame() {
      this.dataService.getRecords("timeFrame")
        .subscribe(timeFrame => {
          this.timeFrame = timeFrame;
        })
      }

      getUser() {
        this.dataService.getRecords("session/mine")
          .subscribe(id => {
            this.id = id;
            this.getRecordForEdit();
          })
        }

  getSkills() {
    this.dataService.getRecords("skills")
      .subscribe(skills => {
        this.skills = skills;



        for (var j = 0; j < this.profiles.mentorSkills.length; j++) {
          var mentorSkills = this.profiles.mentorSkills[j].id;

          for (var i = 0; i < skills.length; i++) {
            var item = this.skills[i].id;
            
            if (item == mentorSkills) {
              console.log("This works!");
              var elements = document.querySelectorAll('#inner,#inner *');
           



            }
          }
        }
      }
      )


      ,
      error => {
      this.errorMessage = <any>error;
      }
  }

  
  compareSkills(s1, s2): boolean {
    return s1 === s2.skills
  }



  requestSubmit(userForm: NgForm) {

    if (userForm.value.skillsOffered==null) {
      this.skillsValue=[];
    }
    else {
      this.skillsValue=[userForm.value.skillsOffered]
    }


    this.request = {
      "mentorNnumber": userForm.value.mentornNumber,
      "mentorFirstName": userForm.value.mentorFirstName,
      "mentorLastName": userForm.value.mentorLastName,
      "mentorContactMethod": userForm.value.mentorContactMethod,
      "mentorBestContact": userForm.value.best_contact,
      "mentorSkills": userForm.value.mentorskillsOffered,
      "mentorTimeFrameAvailable": userForm.value.timeFrame,
      "mentorAvailabilityHours": userForm.value.hours_available,
      "mentorAvailability": userForm.value.availability_status
    }


    this.request2 = this.skillsValue

    this.dataService.editRecord("mentor", this.request, this.id).subscribe(request => {

      alert("Profile Updated");

    this.dataService.editRecord("mentor/skills", this.request2[0], this.id).subscribe()
    }
  
      
  
  );



  }





}
