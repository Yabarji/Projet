import { Component, OnInit } from '@angular/core';
import {CV} from '../../class/cv';
import {UserService} from '../../service/user/user.service';
import {CvService} from '../../service/cv/cv.service';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {

  user: any = null;
  list = [];

  constructor(private userService: UserService, private cvService: CvService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.list = this.cvService.fake_findAllCvByUserId(this.user.id);
  }

}
