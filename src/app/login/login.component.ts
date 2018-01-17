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

  {console.log(this.request);


    this.dataService.login("session/mine", this.request).subscribe(request => {console.log(request);
      this.router.navigate(['home']);
    
    
    }, error=>{alert("Invalid username")}
     

    
    )


  }


}
}