import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Routes } from '../app-routes';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  async signOut() {
    await this.authService.logout();
    this.navigateToSignIn();
  }

  navigateToSignIn() {
    this.router.navigate([Routes.signIn]);
  }

  navigateToSignUp() {
    this.router.navigate([Routes.signUp]);
  }
}
