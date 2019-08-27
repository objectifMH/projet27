import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { ProjetService } from '../projet.service'

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent implements OnInit {

  utilisateur: Utilisateur[]
  url: string 

  constructor(private projetService: ProjetService ,  ) { }

  ngOnInit() {
    this.projetService.getUtilisateurs().subscribe(
      result => {
        this.utilisateur = result;
        console.log(this.utilisateur);
      }
      ,
      error => console.error('Erreur, La liste d"Utilisateurs ne se charge pas', error)
    )
  }

}
