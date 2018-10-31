import {Component, Input, OnInit} from '@angular/core';
import {CV} from '../../class/cv';

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

}
