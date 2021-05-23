import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  updateNickname() {
    this.socket.emit('nick', this.nickname.value);
  }

  sendMessage() {
    console.log(this.message)
    this.socket.emit('chat', {message: this.message.value});
    this.message.setValue('');
  }

  nickname = new FormControl("");
  SOCKET_ENDPOINT: string = "localhost:3000";
  chat = "";
  socket: any;
  message = new FormControl("");

  constructor() { }

  ngOnInit(): void {
    this.socket = io(this.SOCKET_ENDPOINT, { transports : ['websocket'] })
    this.socket.on('chat', (data: any) => {
      this.chat = this.chat + data + '\n';
    })
  }

}

