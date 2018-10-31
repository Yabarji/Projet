import { Component, OnInit } from '@angular/core';
import {CvService} from '../../service/cv/cv.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {UserService} from '../../service/user/user.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  cvId: number;
  cv: object;
  user: object;

  constructor( private route: ActivatedRoute, private cvService: CvService, private userService: UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if ( params.has('id')) {
        this.cvId = +params.get('id');

        this.cv = this.cvService.fake_findCvById(this.cvId);
      }
    });
  }

}
