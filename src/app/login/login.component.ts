import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Routes } from '../app-routes';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../auth/auth.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errorMessage: string;

  constructor(public authService: AuthService,
  private router: Router) { }

  ngOnInit() {
  }

  async tryLogin() {
    if (await this.authService.user) {
      await this.authService.logout();
      this.login();
    } else {
      this.login();
    }
  }

  async login() {
    const authResponse = await this.authService.login(this.email, this.password);
    if (authResponse.isError) {
      this.errorMessage = authResponse.value.message;
    } else {
      this.router.navigate([Routes.home]);
    }
  }
}
