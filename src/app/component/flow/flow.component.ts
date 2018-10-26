import { Component, OnInit } from '@angular/core';
import {CV} from '../../class/cv';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {

  cv: CV = new CV();

  Lcv: any[];

  constructor() { }

  ngOnInit() {
  }


  public add() {

    this.Lcv.push(this.cv);


  }

}
