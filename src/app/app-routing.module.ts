import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { Routes } from './app-routes';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './auth/signin/signin.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { ChatComponent } from './chat/chat.component';

const routes = [
  { path: Routes.signIn, component: SignInComponent },
  { path: Routes.signUp, component: SignUpComponent },
  { path: Routes.chat + Routes.channelParameter, component: ChatComponent },
  { path: Routes.chat, component: ChatComponent },
  { path: Routes.default, component: HomeComponent },
  { path: Routes.any, redirectTo: Routes.default, pathMatch: 'full' }
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
