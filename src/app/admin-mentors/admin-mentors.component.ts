import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';
import { fadeInAnimation } from '../animations/fade-in.animation';
import { DataService } from '../data.service'

@Component({
  selector: 'app-admin-mentors',
  templateUrl: './admin-mentors.component.html',
  styleUrls: ['./admin-mentors.component.css'],
  animations: [fadeInAnimation]
})
export class AdminMentorsComponent implements OnInit {

  @Input() MentorProfile;
  @Input() showTable;
  @Input() admin;
  adminObject;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
  }

}
