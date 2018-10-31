import { Injectable } from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser() {
    return JSON.parse( localStorage.getItem(AuthenticationService.KEY) );
  }

}
