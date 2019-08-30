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

  @Input('messageInput')
  message:Message

  @Output()
  delete = new EventEmitter<Message>();

  utilisateur :  Utilisateur

  constructor(private projetService: ProjetService , private route: ActivatedRoute  , private router: Router ) { }

  ngOnInit() {
    let  messageId = +this.message.utilisateurId
   
        this.utilisateur = this.message.utilisateur ; 
        console.log(this.message); 
        /*this.projetService.getUtilisateur(this.message.utilisateurId).subscribe(
          result => { 
            this.utilisateur = result ; 
          }
        )*/
        
      }
    
  

deleteMessage(messageDelete : Message){
  console.log(" je vais te supprimer >> " + messageDelete.content)
  this.delete.emit(this.delete);
}

}
