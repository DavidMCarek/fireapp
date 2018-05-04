import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  channelsRef: AngularFireList<any>;
  channels: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
  }
}
