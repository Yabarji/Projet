import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit{
  private static KEY = 'token';
  private _state: boolean;

  constructor() { }

  ngOnInit(): void {

    const data = localStorage.getItem(AuthenticationService.KEY);
    this._state = ( data === 'azerty' );

  }
  get state(): boolean {
    return this._state;
  }

  public login() {
    this._state = true;
    this.save('azerty');
  }

  public logout() {
    this._state = false;
    this.save(null);
  }

  private save(value: string): void {
    localStorage.setItem(AuthenticationService.KEY, value);
  }
}
