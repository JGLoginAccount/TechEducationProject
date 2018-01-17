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
  id: number;
  contactMethod;
  timeFrame;



  getRecordForEdit() {

    this.id = 12;
    this.route.params
      .switchMap((params: Params) => this.dataService.getRecord("mentor", this.id))
      .subscribe(profiles => {
        this.profile1 = profiles;

        this.profiles = this.profile1[0];

        console.log(this.profiles);
        console.log(this.profile1);
        this.getSkills();
      });


  }

  ngOnInit() {

    this.getRecordForEdit();
    this.getContactMethod();
    this.getTimeFrame();



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

  getSkills() {
    this.dataService.getRecords("skills")
      .subscribe(skills => {
        this.skills = skills;



        for (var j = 0; j < this.profiles.mentorSkills.length; j++) {
          var mentorSkills = this.profiles.mentorSkills[j].id;

          for (var i = 0; i < skills.length; i++) {
            var item = this.skills[i].id;
            console.log(item);
            if (item == mentorSkills) {
              console.log("This works!");
              var elements = document.querySelectorAll('#inner,#inner *');
              console.log(elements);



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

  




  requestSubmit(userForm: NgForm) {


    this.request = {
      "user": userForm.value.mentornNumber,
      "mentorNnumber": userForm.value.mentornNumber,
      "mentorFirstName": userForm.value.mentorFirstName,
      "mentorLastName": userForm.value.mentorLastName,
      "mentorContactMethod": userForm.value.contactMethod,
      "mentorBestContact": userForm.value.best_contact,
      "mentorSkills": userForm.value.mentorskillsOffered,
      "mentorTimeFrameAvailable": userForm.value.timeFrame,
      "mentorAvailabilityHours": userForm.value.hours_available,
      "mentorAvailability": userForm.value.availability_status,
    }


    this.request2 = [userForm.value.skillsOffered]

    console.log(this.request2[0]);

    console.log(this.request);

    this.dataService.editRecord("mentor", this.request, 12).subscribe(request =>
      this.dataService.editRecord("mentor/skills", this.request2[0], 12).subscribe());



  }





}
