import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { ProjetService } from '../projet.service';
import { Utilisateur } from '../utilisateur';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {

  messages: Message[] = [];
  utilisateurs: Utilisateur[];

  addMess: Message;
  newMessage: string;

  isCreateMessage: boolean = false;

  messageForm: FormGroup;

  constructor(private projetService: ProjetService, private fb: FormBuilder) { }



  ngOnInit() {

    this.messageForm = this.fb.group({
      utilisateurId: [''],
      content: ['']
    });

    this.refreshMessages();
  }

  private refreshMessages() {
    this.projetService
      .getMessages()
      .subscribe(
        result => {
          (this.messages = result);
          this.projetService.getUtilisateurs().subscribe(
            resultUtil => { (this.utilisateurs = resultUtil); },
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
    val.utilisateurId = + val.utilisateurId;
    this.projetService.AddMessage(val).subscribe(() => this.refreshMessages())

  }

  get contentControl() {
    return this.messageForm.get('contentControl')
  }

  get idControl() {
    return this.messageForm.get('idControl')
  }



  addMessage(messageToAdd: Message) {
    this.projetService.AddMessage(messageToAdd).subscribe(() => this.refreshMessages())
  }

  deleteMessage(message: Message) {
    this.projetService.delMessage(message.id).subscribe(() => this.refreshMessages())
  }
}