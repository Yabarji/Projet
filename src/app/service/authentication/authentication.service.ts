import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../class/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {

  private static URL = 'http://192.168.10.95:8080/CVinter/api';
  private static KEY = 'auth';
  private _state: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const data = localStorage.getItem(AuthenticationService.KEY);

    this._state = null;
  }

  private authenticate(user: User) {
    return this.http.post<User>(`${AuthenticationService.URL}/authentication`, user);
  }

  public login(user: User) {
    const observable = this.authenticate(user);

    observable.subscribe( (u: User) => {
      this.save( JSON.stringify(u) );
    });

    return observable;

    /*this._state = true;
    this.save('log');*/
  }

  public logout() {
    this._state = false;
    this.save(null);
  }

  private save(data: string) {
    localStorage.setItem(AuthenticationService.KEY, data);
  }

  get state(): boolean {
    return this._state;
  }

}
