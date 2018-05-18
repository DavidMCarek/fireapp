import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ChannelNameValidator } from './channels.validators';
import { Router } from '@angular/router';
import { Routes } from '../app-routes';
import { ChannelStateService } from './channel-state.service';
import { ExpansionState } from './channel-state';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  publicChannelsRef: AngularFireObject<any>;
  publicChannelsObservable: Observable<any>;
  publicChannels: string[];

  isNewChannelPublic = true;
  newChannelName: FormControl;
  filterInput = '';

  expansionState: ExpansionState;

  constructor(private db: AngularFireDatabase, private router: Router, private channelStateService: ChannelStateService) {
    this.publicChannelsRef = this.db.object('public-channels');
    this.publicChannelsObservable = this.publicChannelsRef.valueChanges();
    this.updateChannelNameValidator();

    this.expansionState = channelStateService.getExpansionState();
  }

  ngOnInit() {
    this.publicChannelsObservable.subscribe(channels => {
      if (channels === null) {
        return;
      }

      this.publicChannels = Object.keys(channels);
      this.publicChannels.sort((a, b) => a.localeCompare(b));
      this.updateChannelNameValidator();
    });
  }

  updateChannelNameValidator() {
    this.newChannelName = new FormControl('', [
      Validators.maxLength(20),
      ChannelNameValidator.channelAlreadyExists(this.publicChannels)
    ]);
  }

  createChannel(isPublicChannel: boolean, channelFormControl: FormControl): void {
    if (isPublicChannel) {
      const channelRef = this.db.object('public-channels/' + channelFormControl.value);
      channelRef.set(true);
    }
  }

  routeToChannel(channelName: string) {
    this.channelStateService.setExpansionState(this.expansionState);
    this.router.navigate([Routes.chat, channelName]);
  }

  getErrorMessage(): string {
    if (this.newChannelName.hasError('maxlength')) {
      return 'Channel name can\'t exceed 20 characters';
    }

    if (this.newChannelName.hasError('channelAlreadyExists')) {
      return 'A channel with this name already exists';
    }

    return '';
  }

}
