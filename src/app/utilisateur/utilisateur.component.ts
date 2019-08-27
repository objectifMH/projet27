import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { ProjetService } from '../projet.service'
import { ActivatedRoute, RouterEvent, Router } from '@angular/router'
import { Objet } from '../objet';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})

export class UtilisateurComponent implements OnInit {

  utilisateur: Utilisateur
  objets : Objet[]
  url: String ; 

  constructor(private projetService: ProjetService , private route: ActivatedRoute , private router:Router , public dialog: MatDialog) { }

  ngOnInit() {
    const utilId = +this.route.snapshot.paramMap.get('id')
    this.projetService.getUtilisateur(utilId).subscribe(
      result => {
        this.utilisateur = result ;
        this.url = (this.utilisateur.urlAffiche !== "") ? this.utilisateur.urlAffiche : "https://fr.wikipedia.org/wiki/Liste_des_personnages_de_Ghost_in_the_Shell#/media/Fichier:GITS_laughingman.svg";
        this.projetService.getObjetsByUutilisateur(utilId).subscribe(
          resultObjets => {
            this.objets = resultObjets ;
          }
          ,
          error => console.log('Une erreur est survenue, j"arrive pas à charger '+utilId, error)
          
        )
      }
      ,
      error => console.log('Une erreur est survenue, j"arrive pas à charger les objets de '+utilId , error)
    )
  }

  deleteUtilisateur() {
    
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => 
      {
        console.log(`Dialog result: ${result}`);
        if ( result )
        {
          this.projetService.delUtilisateur(this.utilisateur.id).subscribe(
            () => this.router.navigateByUrl('/utilisateurs')
          )
      }
      });
  
    

  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
