import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { fadeInAnimation } from '../animations/fade-in.animation';
import { DataService } from '../data.service'
import { skills } from '../skills';
import { MentorSkills } from '../mentor-skills';
import { Mentor } from '../mentor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  request;
  
  user;

  adminObject;

  admin:boolean=false;

  showLogin:boolean=true;

  constructor(
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    
  }

  requestSubmit(userForm: NgForm) {


    this.request =


    {
      "username":userForm.value.userName,
      "password": userForm.value.password,
  }

    this.dataService.login("session/mine", this.request).subscribe(request => {

      this.checkUser();
      this.showLogin=false;
    
    
    }, error=>{alert("Invalid username")}
     
   
    
    )


  }




checkUser() {
  this.dataService.getRecords("session/mine").subscribe(user => {

    console.log(user);
    this.user=user;
});


this.dataService.getRecords("session/mine/login").subscribe(returnValue=> {

  this.adminObject=returnValue[0];
  console.log(returnValue); 

  if (this.adminObject.mentorNnumber=="admin") {
    this.admin=true;
  }
})



}

alertMe() {
  this.checkUser();

}
}