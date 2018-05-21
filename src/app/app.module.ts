import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { FirebaseModule } from './common/firebase.module';
import { MaterialModule } from './common/material.module';
import { RoutingModule } from './common/routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FirebaseModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    AuthModule,
    ChatModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
