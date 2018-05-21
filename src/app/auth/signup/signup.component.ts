import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Routes } from '../../app-routes';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../auth.component.css']
})
export class SignUpComponent implements OnInit {

  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  errorMessage: string;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async signUp(username: string, email: string, password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    let authResponse = await this.authService.signUp(email, password);
    if (authResponse.isError) {
      this.errorMessage = authResponse.value.message;
      return;
    }

    authResponse = await this.authService.setDisplayName(username);
    if (authResponse.isError) {
      this.errorMessage = authResponse.value.message;
      return;
    }

    this.router.navigate([Routes.chat]);
  }
}
