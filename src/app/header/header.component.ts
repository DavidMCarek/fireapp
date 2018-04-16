import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Routes } from '../app-routes';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
  }

  constructor(public authService: AuthService,
  private router: Router) { }

  async logout() {
    await this.authService.logout();
    this.navigateToLogin();
  }

  navigateToLogin() {
    this.router.navigate([Routes.login]);
  }

  navigateToSignup() {
    this.router.navigate([Routes.signup]);
  }
}
