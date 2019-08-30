import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Message } from '../message';
import { ProjetService } from '../projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../utilisateur';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('messageInput')
  message: Message;

  @Output()
  delete = new EventEmitter();

  utilisateur: Utilisateur = null ;

  constructor(private projetService: ProjetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.utilisateur = this.message.utilisateur;
  }



  deleteMessage(messageDelete: Message) {
    this.delete.emit(this.delete);
  }

}
