import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module'

@Component({
  selector: 'app-link1',
  templateUrl: './link1.component.html',
  styleUrls: ['./link1.component.scss']
})
export class Link1Component implements OnInit {

  navLinks = [{
    path: 'sublink1',
    label: 'Sublink 1'
  }, {
    path: 'sublink2',
    label: 'Sublink 2'
  }]

  constructor() { }

  ngOnInit(): void {

  }

}
