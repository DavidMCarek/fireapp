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

  async signup() {
    this.handleAuthResult(this.authService.signup(this.email, this.password));
  }

  async tryLogin() {
    if (await this.authService.user) {
      this.authService.logout().then(value => this.login());
    } else {
      this.login();
    }
  }

  async login() {
    this.handleAuthResult(this.authService.login(this.email, this.password));
  }

  async handleAuthResult(authPromise: Promise<any>) {
    this.errorMessage = await authPromise
    .then(value => { })
    .catch(error => {
      return error.message;
    });

    this.cleanUpUsernameAndPassword();
  }

  cleanUpUsernameAndPassword() {
    if (this.errorMessage) {
      this.password = '';
    } else {
      this.email = this.password = '';
    }
  }
}
