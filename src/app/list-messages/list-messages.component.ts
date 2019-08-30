import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { ProjetService } from '../projet.service';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {

  messages: Message[] = [];
  utilisateurs: Utilisateur[];

  newMessage: string;

  isCreateMessage: boolean = false;

  constructor(private projetService: ProjetService) { }

  ngOnInit() {
    this.refreshMessages();
  }

  private refreshMessages() {
    this.projetService
      .getMessages()
      .subscribe(
        result => {
          (this.messages = result);
          this.projetService.getUtilisateurs().subscribe(
            resultUtil => { (this.utilisateurs = resultUtil);  },
            error => console.error("Une erreur est survenue, on arrive pas a recuperer les messages", error)

          )
        },
        error => console.error("Une erreur est survenue, on arrive pas a recuperer les messages", error)
      );


  }

  addFormMessage() {
    this.isCreateMessage = !this.isCreateMessage;

  }

  validateMessage(val) {
    console.log(val);
  }

  addMessage(messageToAdd: Message) {
    this.projetService.AddMessage(messageToAdd).subscribe(() => this.refreshMessages())
  }

  deleteMessage(message: Message) {
    this.projetService.delMessage(message.id).subscribe(() => this.refreshMessages())
  }
}