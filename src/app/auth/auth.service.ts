import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { AuthResponse } from './auth-response';

@Injectable()
export class AuthService {

  redirectUrl: string;

  private user: firebase.User;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.user = firebaseAuth.auth.currentUser;
    firebaseAuth.authState.subscribe(user => this.user = user);
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  get currentUser(): firebase.User {
    return this.authenticated ? this.user : null;
  }

  get currentUserObservable(): Observable<firebase.User> {
    return this.firebaseAuth.authState;
  }

  googleLogin(): Promise<AuthResponse> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  socialSignIn(provider): Promise<AuthResponse> {
    const socialSignInPromise = this.firebaseAuth.auth.signInWithPopup(provider);
    return this.handleAuthResult(socialSignInPromise);
  }

  setDisplayName(username: string): Promise<AuthResponse> {
    const updatePromise = this.user.updateProfile({displayName: username, photoURL: this.user.photoURL});
    return this.handleAuthResult(updatePromise);
  }

  logout(): Promise<AuthResponse> {
    const logoutPromise = this.firebaseAuth.auth.signOut();
    return this.handleAuthResult(logoutPromise);
  }

  async signUp(email: string, password: string): Promise<AuthResponse> {
    if (this.authenticated) {
      await this.logout();
    }

    const signupPromise = this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
    return this.handleAuthResult(signupPromise);
  }

  async signIn(email: string, password: string): Promise<AuthResponse> {
    if (this.authenticated) {
      await this.logout();
    }

    const loginPromise = this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    return this.handleAuthResult(loginPromise);
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
