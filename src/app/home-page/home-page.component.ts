import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from '../animations/fade-in.animation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
