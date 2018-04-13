import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { AuthResponse } from './models/auth-response';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string): Promise<AuthResponse> {
    const signupPromise = this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
    return this.handleAuthResult(signupPromise);
  }

  login(email: string, password: string): Promise<AuthResponse> {
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
