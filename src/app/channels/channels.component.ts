import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
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
  newChannelName: string;

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
    });
  }

  createChannel(name: string) {
    const channelRef = this.db.object('public-channels/' + name);
    const date = new Date();
    channelRef.set({ lastUpdatedOn: date.toUTCString() });
  }
}
