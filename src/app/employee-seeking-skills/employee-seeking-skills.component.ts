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

  ngOnInit() {
  }

  requestSubmit(awardForm: NgForm){
    console.log(awardForm.value);
}

}
