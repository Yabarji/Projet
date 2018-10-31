import { Component, OnInit } from '@angular/core';
import {CV} from '../../class/cv';
import {from} from "rxjs";

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {

  cv: CV = new CV();

  Lcv: any[];

  name: string;

  constructor() { }

  ngOnInit() {
  }


  public add(name: string) {

    this.Lcv.push(this.name,this.cv);


  }

  public deleteCV(name: string  ) {


  }

}
