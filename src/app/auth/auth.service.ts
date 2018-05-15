import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { AuthResponse } from './auth-response';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthService {
  user: firebase.User;

  constructor(private firebaseAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.user = firebaseAuth.auth.currentUser;
    firebaseAuth.authState.subscribe(user => this.user = user);
  }

  async signup(email: string, password: string): Promise<AuthResponse> {
    if (this.user) {
      await this.logout();
    }

    const signupPromise = this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
    return this.handleAuthResult(signupPromise);
  }

  async setDisplayName(username: string): Promise<AuthResponse> {
    const updatePromise = this.user.updateProfile({displayName: username, photoURL: this.user.photoURL});
    return this.handleAuthResult(updatePromise);
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    if (this.user) {
      await this.logout();
    }

    const loginPromise = this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    return this.handleAuthResult(loginPromise);
  }

  logout(): Promise<AuthResponse> {
    const logoutPromise = this.firebaseAuth.auth.signOut();
    return this.handleAuthResult(logoutPromise);
  }

  async handleAuthResult(authPromise: Promise<any>): Promise<AuthResponse> {
    return await authPromise
    .then(value => {
      return new AuthResponse(value, false);
    })
    .catch(error => {
      return new AuthResponse(error, true);
    });
  }
}
