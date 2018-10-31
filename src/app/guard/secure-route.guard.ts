import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../service/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SecureRouteGuard implements CanActivate {

  constructor( private authService: AuthenticationService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.isConnected();
  }
}
