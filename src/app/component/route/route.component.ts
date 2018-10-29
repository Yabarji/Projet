import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentication/authentication.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  isAuth: boolean;

  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
    this.authentication.authenticationObservable.subscribe( (auth: boolean) => {
      this.isAuth = auth;
    });
  }

  public deconnexion() {
    this.authentication.logout();
  }

}
