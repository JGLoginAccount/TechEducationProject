import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { fadeInAnimation } from '../animations/fade-in.animation';
import { DataService } from '../data.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [fadeInAnimation]
})
export class AdminComponent implements OnInit {

  results;
  showTable;
  MentorProfile;
  admin;
  adminObject;
  id;
  addSkill;
  showTableSkills;
  resultsSkills;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.showTable = false;
    this.showTableSkills = false;
  }

  ngOnInit() {
  }

  requestMentors() {
    this.dataService.getRecords("mentor").subscribe(MentorProfile => {
    this.MentorProfile = MentorProfile
      console.log(MentorProfile)
      this.showTable = true;
    })
  }

  requestSubmit() {
    this.dataService.getRecords("submit").subscribe(results => {
      this.results = results
      console.log(results)
      this.showTable = true;
    })
  }

  editSkills() {
    this.dataService.getRecords("skills").subscribe(resultsSkills=>{this.resultsSkills = resultsSkills
      if (this.showTableSkills) {
        this.showTableSkills=false;
      }
      else {
        this.showTableSkills=true;
      }
   })
  }
  
  removeSkills(id) {
    this.id=id;
    this.dataService.deleteRecord("skills/remove", this.id).subscribe(newSkills=>{
    this.dataService.getRecords("skills").subscribe(resultsSkills=>{this.resultsSkills = resultsSkills})
      
   })
  }

  addTheSkill(newSkill) {
  console.log(newSkill.value)
    this.addSkill={
      "skills":newSkill.value.newSkill
    }

    this.dataService.addRecord("skills/add",   this.addSkill).subscribe(addedSkills=>{
      console.log("Success")
      this.dataService.getRecords("skills").subscribe(resultsSkills=>{this.resultsSkills = resultsSkills})
      
    })
  }

}
