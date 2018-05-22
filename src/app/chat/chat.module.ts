import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { PipesModule } from '../pipes/pipes.module';
import { ChannelStateService } from './channels/channel-state.service';
import { ChannelsComponent } from './channels/channels.component';
import { ChatComponent } from './chat.component';
import { MaterialModule } from '../common/material.module';
import { RoutingModule } from '../common/routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    MaterialModule,
    RoutingModule
  ],
  declarations: [
    ChatComponent,
    ChannelsComponent,
  ],
  providers: [ChannelStateService]
})
export class ChatModule { }
