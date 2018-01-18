import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';
import { fadeInAnimation } from '../animations/fade-in.animation';
import { DataService } from '../data.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [fadeInAnimation],
})
export class AdminComponent implements OnInit {

  results;
  showTable = false;
  MentorProfile;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
  }

  requestMentors() {
    this.dataService.getRecords("mentor").subscribe(MentorProfile=>{this.MentorProfile = MentorProfile
    console.log(MentorProfile)
    this.showTable=true;
      })
     }

  
  requestSubmit() {
  this.dataService.getRecords("submit").subscribe(results=>{this.results = results
  console.log(results)
  this.showTable=true;
    })
   }
  }
