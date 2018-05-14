import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  publicChannelsRef: AngularFireObject<any>;
  publicChannelsObservable: Observable<any>;
  publicChannels: string[];

  newChannelName = new FormControl('', [
    Validators.maxLength(15)
  ]);

  constructor(private db: AngularFireDatabase) {
    this.publicChannelsRef = this.db.object('public-channels');
    this.publicChannelsObservable = this.publicChannelsRef.valueChanges();
  }

  ngOnInit() {
    this.publicChannelsObservable.subscribe(channels => {
      if (channels === null) {
        return;
      }

      this.publicChannels = Object.keys(channels);
      this.publicChannels.sort((a, b) => a.localeCompare(b));
    });
  }

  createChannel(channelFormControl: FormControl): void {
    if (!channelFormControl.valid) {
      return;
    }

    const channelRef = this.db.object('public-channels/' + channelFormControl.value);
    const date = new Date();
    channelRef.set({ lastUpdatedOn: date.toUTCString() });
  }

  getErrorMessage(): string {
    if (this.newChannelName.hasError('maxLength')) {
      return 'Channel name can\'t exceed 15 characters';
    }

    return '';
  }
}
