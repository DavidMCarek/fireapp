import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Routes } from '../../app-routes';
import { AuthService } from '../auth.service';
import { AuthResponse } from '../auth-response';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css', '../auth.component.css']
})
export class SignInComponent implements OnInit {

  email: string;
  password: string;
  errorMessage: string;

  constructor(public authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

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
    } else {
      this.router.navigate([Routes.chat]);
    }
  }
}
