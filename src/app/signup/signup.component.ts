import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Routes } from '../app-routes';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../auth/auth.component.css']
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

  async trySignup() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }
    if (await this.authService.user) {
      await this.authService.logout();
      this.signup();
    } else {
      this.signup();
    }
  }

  async signup() {
    const authResponse = await this.authService.signup(this.email, this.password);
    if (authResponse.isError) {
      this.errorMessage = authResponse.value.message;
    } else {
      this.router.navigate([Routes.home]);
    }
  }
}
