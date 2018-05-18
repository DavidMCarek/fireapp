import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ChannelNameValidator } from './channels.validators';

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

  constructor(private db: AngularFireDatabase) {
    this.publicChannelsRef = this.db.object('public-channels');
    this.publicChannelsObservable = this.publicChannelsRef.valueChanges();
    this.updateChannelNameValidator();
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
