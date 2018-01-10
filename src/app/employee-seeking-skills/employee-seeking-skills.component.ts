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

  ngOnInit() {
  }

  requestSubmit(userForm: NgForm){


      this.request = {
        "nNumber":"N0211099",
        "menteeSkillRequested":userForm.value.skillRequested,
        "menteeSkillOtherText":userForm.value.skillRequestedOther,
        "menteeHoursRequested":userForm.value.hoursrequested,
        "menteeTimeRequested":userForm.value.timeFrame,
        "menteeRequestDescription":userForm.value.oppurtunity,
        "menteeRequestStatus":userForm.value.status,
        "menteeCompletedSummary":userForm.value.summary
      }

    console.log( this.request);
}



}
