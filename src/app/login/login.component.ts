import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { fadeInAnimation } from '../animations/fade-in.animation';
import { DataService } from '../data.service'
import { skills } from '../skills';
import { MentorSkills } from '../mentor-skills';
import { Mentor } from '../mentor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  request;

  constructor(

    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
  }

  requestSubmit(userForm: NgForm) {


    this.request =


    {
      "username":userForm.value.username,
      "password": userForm.value.password,
  }



    this.dataService.login("mentor", this.request).subscribe(request => {console.log(request)}


    )



  }


}
