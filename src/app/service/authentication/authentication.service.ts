import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../class/user';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public static KEY = 'authentication';

  private authenticationSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public authenticationObservable = this.authenticationSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const auth = !!(localStorage.getItem(AuthenticationService.KEY));
    this.authenticationSubject.next(auth);
  }

  public isConnected(): boolean {
    return !!(localStorage.getItem(AuthenticationService.KEY));
  }

  public login(user: User) {
    if ( environment.production ) {
      return this.http.post(`${environment.api}/authentication`, user);
    } else {
      return this.http.get(`${environment.api}/user.json`).pipe(
        map( (datas: any[]) => {
          const u = datas.find( (data) => {
            if ( data.email === user.email && data.password === user.password ) {
              localStorage.setItem( AuthenticationService.KEY, JSON.stringify(data) );
              this.authenticationSubject.next(true);
              return data;
            }
          });

          return u || {};
        })
      );
    }

  }

  public logout() {
    localStorage.removeItem(AuthenticationService.KEY);
    this.authenticationSubject.next(false);
    this.router.navigateByUrl('/home');
  }

}
