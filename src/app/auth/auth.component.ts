import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  email: string;
  password: string;
  errorMessage: string;

  constructor(public authService: AuthService) { }

  ngOnInit() { }

  signup() {
    const authPromise = this.authService.signup(this.email, this.password);
    authPromise.then(function(value) {
      console.log('signed up');
    }).catch((error) => this.setErrorMessage(error, this.errorMessage));
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  setErrorMessage(error, errorMessage) {
    errorMessage = error.message;
  }
}
