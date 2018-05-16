import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Message } from './message';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  channelSelected = false;

  messagesRef: AngularFireList<any>;
  messagesObservable: Observable<Message[]>;
  messages: Message[];

  messageText = new FormControl('', []);

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private authService: AuthService) {
    this.route.params.subscribe(params => {
      if (typeof params.channel === 'undefined' || params.channel === null) {
        this.channelSelected = false;
        return;
      }

      this.channelSelected = true;

      this.messagesRef = db.list('messages/' + params.channel);
      this.messagesObservable = this.messagesRef.valueChanges();
      this.messages = new Array();

      this.messagesObservable.subscribe(messages => this.messages = messages);
    });
  }

  ngOnInit() {
  }

  postMessage(messageText: string) {
    messageText = messageText.trim();

    if (messageText.length < 1) {
      return;
    }

    this.messagesRef.push(new Message(messageText, this.authService.user.displayName));
    this.messageText.setValue('');
  }
}
