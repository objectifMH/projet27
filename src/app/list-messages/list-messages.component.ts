import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { ProjetService } from '../projet.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {

  messages: Message[] = [];

  newMessage: string;

  constructor(private projetService : ProjetService) {}

  ngOnInit() {
    this.refreshMessages();
  }

  private refreshMessages() {
    this.projetService
    .getMessages()
    .subscribe(
      result => {(this.messages = result) ;  },
      error => console.error("Une erreur est survenue, on arrive pas a recuperer les messages", error)
    );
  }


  addMessage(messageToAdd:Message) {
    this.projetService.AddMessage(messageToAdd).subscribe(() => this.refreshMessages())
  }

  deleteTodo(message: Message) {
    this.projetService.delMessage(message.id).subscribe(() => this.refreshMessages())
  }
}