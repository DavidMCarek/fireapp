import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Routes } from '../../app-routes';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../auth.component.css']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;
  confirmPassword: string;
  errorMessage: string;

  constructor(public authService: AuthService,
  private router: Router) { }

  ngOnInit() {
  }

  async signup() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    const authResponse = await this.authService.signup(this.email, this.password);
    if (authResponse.isError) {
      this.errorMessage = authResponse.value.message;
    } else {
      this.router.navigate([Routes.home]);
    }
  }
}
