import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import {CV} from '../../class/cv';
import * as jsPDF from 'jspdf' ;


declare var jquery: any;
declare var xepOnline: any;

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
  

  @Input() cv: object;

  constructor() { }

  ngOnInit() { }

  public concat(data: any[]) {
    return data.join(', ');
  }


  @ViewChild('content') content: ElementRef
  public downloadPDF() {

    return xepOnline.Formatter.Format('content',{render:'download'});
  }

}
