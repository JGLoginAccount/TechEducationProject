import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';
import { fadeInAnimation } from '../animations/fade-in.animation';
import { DataService } from '../data.service'

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css'],
  animations: [fadeInAnimation]
})
export class AdminRequestsComponent implements OnInit {

  @Input() results;
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

//   requestSubmit() {
//     this.dataService.getRecords("submit").subscribe(results=>{this.results = results
//     console.log(results)
//  this.showTable=true;
//       })
//      }

}
