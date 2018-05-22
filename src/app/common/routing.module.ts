import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { Routes } from './routes';
import { HomeComponent } from '../home/home.component';
import { SignInComponent } from '../auth/signin/signin.component';
import { SignUpComponent } from '../auth/signup/signup.component';
import { ChatComponent } from '../chat/chat.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { AuthService } from '../auth/auth.service';

const routes = [
  { path: Routes.signIn, component: SignInComponent },
  { path: Routes.signUp, component: SignUpComponent },
  { path: Routes.chat + Routes.channelParameter, component: ChatComponent, canActivate: [AuthGuard] },
  { path: Routes.chat, component: ChatComponent, canActivate: [AuthGuard] },
  { path: Routes.default, component: HomeComponent },
  { path: Routes.any, redirectTo: Routes.default, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class RoutingModule { }
