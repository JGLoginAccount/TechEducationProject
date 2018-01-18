import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() admin:boolean;
  
  adminObject;

  constructor(
  ) { }

  ngOnInit() {
      }
    }

