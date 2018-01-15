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
  skillmaster:skills;
   profile1;
  request;
  errorMessage: string;
  request2;
  profiles:Mentor;
  id:number;



    getRecordForEdit(){

      this.id=5;
      this.route.params
        .switchMap((params: Params) => this.dataService.getRecord("mentor", this.id))
        .subscribe(profiles => {this.profile1 = profiles;

        this.profiles=this.profile1[0];
          
          console.log(this.profiles);
          console.log(this.profile1);
          this.getSkills();});

    
    }
  
    ngOnInit() {
    
      this.getRecordForEdit();
     
        }
       
  

    getSkills() {
      this.dataService.getRecords("skills")
      .subscribe(skills => {this.skills = skills;

     

            for (var j = 0; j < this.profiles.mentorSkills.length ; j++) {
              var mentorSkills = this.profiles.mentorSkills[j].id;

              for (var i = 0; i < skills.length ; i++) {
                var item = this.skills[i].id;
                console.log(item);
              if (item==mentorSkills) {
                console.log("This works!");
                var elements=document.querySelectorAll('#inner,#inner *');
                console.log(elements);
    


             }
            }
         }
        }
      )


      ,   
        error =>  {this.errorMessage = <any>error;
        }
      }





  

    requestSubmit(userForm: NgForm){


      this.request = {
        "user":"N0211099",
        "mentorContactMethod":userForm.value.contact_method,
        "mentorBestContact":userForm.value.best_contact,
        
        "mentorTimeFrameAvailable":userForm.value.timeFrame,
        "mentorAvailabilityHours":userForm.value.hours_available,
        "mentorAvailability":userForm.value.availability_status,
       
      }


        this.request2 =[userForm.value.skillsOffered]

        console.log(this.request2[0]);
    
  
     
      this.dataService.editRecord("mentor",this.request,5).subscribe(request=>
     this.dataService.editRecord("mentor/skills",this.request2[0],5).subscribe());
      


}





    }
