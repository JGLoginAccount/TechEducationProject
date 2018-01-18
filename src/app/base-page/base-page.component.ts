import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {

  @Input() admin;
  adminObject;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {




    }

}
 