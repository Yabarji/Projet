import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../class/user';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable, of, Subscriber} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private static KEY = 'authentication';

  private authenticationSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public authenticationObservable = this.authenticationSubject.asObservable();

  constructor(private http: HttpClient) {
    const auth = !!(localStorage.getItem(AuthenticationService.KEY));
    this.authenticationSubject.next(auth);
  }

  public login(user: User) {
    if ( environment.production ) {
      return this.http.post(`${environment.api}/authentication`, user);
    } else {
      return this.http.get(`${environment.api}/user.json`).pipe(
        map( (datas: any[]) => {
          let user = datas.find( (data) => {
            if ( data.email === user.email && data.password === user.password ) {
              localStorage.setItem( AuthenticationService.KEY, JSON.stringify(data) );
              this.authenticationSubject.next(true);
              return data;
            }
          });

          return user || {};
        })
      );
    }

  }

  public logout() {
    localStorage.removeItem(AuthenticationService.KEY);
    this.authenticationSubject.next(false);
  }

}
