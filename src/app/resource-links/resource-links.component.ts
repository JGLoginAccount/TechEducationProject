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
  selector: 'app-resource-links',
  templateUrl: './resource-links.component.html',
  styleUrls: ['./resource-links.component.css'],
  animations: [fadeInAnimation],
})
export class ResourceLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
