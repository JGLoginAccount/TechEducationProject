import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { fadeInAnimation } from '../animations/fade-in.animation';
import { DataService } from '../data.service'
import { Request } from '@angular/http';
import { Mentor } from '../mentor';

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
  checkPreFillTrue:boolean=false;
  response;
  timeFrame;
  requestStatus;
  profile1;
  id;
  showTable: boolean = false;
  profiles;
  LoggedInid;
  errorMessage: string;
  profile: Mentor;
  prefillData;
  requestId;
  checkPreFill;

  ngOnInit() {

    this.getSkills();
    this.getTimeFrame();
    this.getRequestStatus();
    this.getUser();
    this.getUserLoggedIn();


  }

  getSkills() {
    this.dataService.getRecords("skills")
      .subscribe(skills => {
      this.skills = skills
        this.dataService.getRecords("skills").subscribe()
      },
      error => this.errorMessage = <any>error);


  }

  getTimeFrame() {
    this.dataService.getRecords("timeFrame")
      .subscribe(timeFrame => {
        this.timeFrame = timeFrame;
      })
  }

  getRequestStatus() {
    this.dataService.getRecords("requestStatus")
      .subscribe(requestStatus => {
        this.requestStatus = requestStatus;
      })
  }

  getUser() {
    this.dataService.getRecords("session/mine/login")
      .subscribe(id => {
      this.id = id;
        this.profile = this.id[0];

      })
  }

  requestSubmit(userForm: NgForm) {

    this.request = {
      "nNumber": this.profile.mentorNnumber,
      "menteeSkillRequested": userForm.value.skillRequested,
      "menteeSkillOtherText": userForm.value.skillRequestedOther,
      "menteeHoursRequested": userForm.value.hoursrequested,
      "menteeTimeRequested": userForm.value.timeFrame,
      "menteeRequestDescription": userForm.value.oppurtunity,
      "menteeRequestStatus": userForm.value.status,
      "menteeCompletedSummary": userForm.value.summary
    }

    if (this.checkPreFill == null) {
      this.dataService.addRecord("submit", this.request).subscribe(response => {
      this.response = response
      this.showTable = true;
      this.dataService.getRecord("submit/requestId", this.LoggedInid)
      .subscribe(requestId => {
        this.requestId = requestId;
        this.getRecordForEdit();
      })


    }
  
        ,
        error => this.errorMessage = <any>error);
    }
    else {
      this.dataService.editRecord("submit/request/prefill", this.request, this.prefillData.id).subscribe(response => {
      this.response = response;
        this.showTable = true;

        this.requestId=this.prefillData.id
        this.getRecordForEdit();
      }
        ,
        error => this.errorMessage = <any>error);
    }
  }

  getRecordForEdit() {

    this.route.params
      .switchMap((params: Params) => this.dataService.getRecord("submit", this.LoggedInid))
      .subscribe(profiles => {
        this.profile1 = profiles;
        console.log(profiles)
        if (this.profile1[0] == null) {

        }
        else {
          this.checkPreFillTrue=true;
        }
       
      });


  }

  getUserLoggedIn() {
    this.dataService.getRecords("session/mine")
      .subscribe(id => {
        this.LoggedInid = id;
        this.getRecordForEdit();
      })
  }

  prefillForm(buttonstuff: NgForm) {
    console.log(buttonstuff.value)


    this.route.params
      .switchMap((params: Params) => this.dataService.getRecord("submit/request", buttonstuff.value.selectedOption))
      .subscribe(prefillData => {
      this.prefillData = prefillData;
        console.log(prefillData)
        this.checkPreFill = this.prefillData.id;
     
        
        
      });




  }




}
