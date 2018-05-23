import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Routes } from '../../shared/routes';
import { ExpansionState } from './channel-state';
import { ChannelStateService } from './channel-state.service';
import { ChannelNameValidator } from './channels.validators';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit, OnDestroy {

  publicChannelsRef: AngularFireObject<any>;
  publicChannelsObservable: Observable<any>;
  publicChannels: string[];
  publicChannelsDisplay: string[];

  isNewChannelPublic = true;
  newChannelName: FormControl;
  filterInput = '';

  expansionState: ExpansionState;

  private unsubscribe = new Subject<void>();

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private channelStateService: ChannelStateService
  ) { }

  ngOnInit() {
    this.publicChannelsRef = this.db.object('public-channels');
    this.publicChannelsObservable = this.publicChannelsRef.valueChanges();
    this.updateChannelNameValidator();
    this.expansionState = this.channelStateService.expansionState;

    this.publicChannelsObservable
      .takeUntil(this.unsubscribe)
      .subscribe(channels => {
        if (channels === null) {
          return;
        }

        this.publicChannels = Object.keys(channels);
        this.publicChannelsDisplay = [];
        this.publicChannels.forEach(channel => this.publicChannelsDisplay.push(channels[channel].displayName));
        this.publicChannelsDisplay.sort((a, b) => a.localeCompare(b));
        this.updateChannelNameValidator();
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  updateChannelNameValidator() {
    this.newChannelName = new FormControl('', [
      Validators.maxLength(20),
      ChannelNameValidator.channelAlreadyExists(this.publicChannels)
    ]);
  }

  createChannel(isPublicChannel: boolean, channelFormControl: FormControl): void {
    if (channelFormControl.value.length < 1) {
      return;
    }

    const encodedChannelName = encodeURIComponent(channelFormControl.value);

    if (isPublicChannel) {
      const channelRef = this.db.object('public-channels/' + encodedChannelName.toLowerCase());
      channelRef.set({ displayName: channelFormControl.value });
    }
  }

  routeToChannel(channelName: string) {
    const encodedChannelName = encodeURIComponent(channelName);
    this.channelStateService.setExpansionState(this.expansionState);
    this.router.navigate([Routes.chat, encodedChannelName.toLowerCase()]);
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
