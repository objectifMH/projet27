import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { ProjetService } from '../projet.service'
import { Objet } from '../objet';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent implements OnInit {

  utilisateur: Utilisateur[]
  objets : Objet[]
  url: string 

  constructor(private projetService: ProjetService ,  ) { }

  ngOnInit() {
    this.projetService.getUtilisateurs().subscribe(
      result => {
        this.utilisateur = result;
        for ( let u of this.utilisateur)
        {
          this.recupObjets(u);
        }
        
      }
      ,
      error => console.error('Erreur, La liste d"Utilisateurs ne se charge pas', error)
    )

  
  }

  recupObjets(utilisateur:Utilisateur) {
    this.projetService.getObjetsByUtilisateur(utilisateur.id).subscribe(
      result => {
        this.objets = result; 
      }
    )
  }

}
