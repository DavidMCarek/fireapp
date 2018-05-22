import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Routes } from '../../common/routes';
import { AuthResponse } from '../auth-response';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css', '../auth.component.css']
})
export class SignInComponent {

  email: string;
  password: string;
  errorMessage: string;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  async signIn() {
    const authResponse = await this.authService.signIn(this.email, this.password);
    this.handleSignInResponse(authResponse);
  }

  async signInWithGoogle() {
    const authResponse = await this.authService.googleLogin();
    this.handleSignInResponse(authResponse);
  }

  handleSignInResponse(authResponse: AuthResponse) {
    if (authResponse.isError) {
      this.errorMessage = authResponse.value.message;
      return;
    }

    if (this.authService.redirectUrl !== null && this.authService.redirectUrl.length > 0) {
      this.router.navigate([this.authService.redirectUrl]);
      this.authService.redirectUrl = null;
      return;
    }

    this.router.navigate([Routes.chat]);
  }
}
