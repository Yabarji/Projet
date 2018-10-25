import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  name: string;

  constructor(private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {

    // this.route.snapshot.paramMap
    this.route.paramMap.subscribe( (params: ParamMap) => {

      if (params.has('name')) {
        this.name = params.get('name').replace(/\b\w/, l => l.toUpperCase());
      }

    });
  }

  public goback() {
    this.router.navigate(['/para']);
  }
}
