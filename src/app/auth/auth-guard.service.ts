import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Routes } from '../common/routes';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    this.authService.redirectUrl = state.url;

    return this.authService.currentUserObservable.map(auth => {
      if (auth) {
        return true;
      }

      this.router.navigate([Routes.signIn]);
      return false;
    });
  }
}
