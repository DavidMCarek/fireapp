import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { Routes } from './app-routes';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ChatComponent } from './chat/chat.component';

const routes = [
  { path: Routes.login, component: LoginComponent },
  { path: Routes.signup, component: SignupComponent },
  { path: Routes.chat, component: ChatComponent },
  { path: Routes.home, component: HomeComponent },
  { path: Routes.default, redirectTo: Routes.home, pathMatch: 'full' },
  { path: Routes.any, redirectTo: Routes.home, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
