import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from '../auth/auth.service';
import { Message } from './message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  channelSelected = false;

  messagesRef: AngularFireList<any>;
  messagesObservable: Observable<Message[]>;
  messages: Message[];
  subscriptionContainer: Subscription;

  messageText = new FormControl('', []);

  private unsubscribe = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.params
      .takeUntil(this.unsubscribe)
      .subscribe(params => {
        if (typeof params.channel === 'undefined' || params.channel === null) {
          this.channelSelected = false;
          return;
        }

        this.channelSelected = true;

        this.messagesRef = this.db.list('messages/' + params.channel);
        this.messagesObservable = this.messagesRef.valueChanges();
        this.messages = new Array();
        this.subscribeToMessages();
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  subscribeToMessages() {
    this.messagesObservable
      .takeUntil(this.unsubscribe)
      .subscribe(messages => {
        this.messages = messages;
        const messageContainer = document.getElementsByClassName('messages-container')[0];
        messageContainer.scrollTop = messageContainer.scrollHeight;
      });
  }

  postMessage(messageText: string) {
    messageText = messageText.trim();

    if (messageText.length < 1) {
      return;
    }

    const date = new Date();
    const message = new Message(
      messageText,
      this.authService.currentUser.displayName,
      date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    );
    this.messagesRef.push(message);
    this.messageText.setValue('');
  }
}
