import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../class/user';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  private static  URL = 'http://jsonplaceholder.typicode.com';


  users: Array<User>;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public loadUser(): void {

    this.http.get<User[]>(`${HttpComponent.URL}/users/`).pipe(

       map( ( users: User[] ) => {
        return users.map( (user: Object) => {
          return new User(user);
        });
    }))
  .subscribe( (users: Array<User>) => {
      console.log(users)
      this.users = users;
    }, (error) => {
      console.log(error);
    });
  }
}
