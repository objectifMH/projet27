import { Component, OnInit } from '@angular/core';
import { Objet } from '../objet'
import { ProjetService } from '../projet.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../utilisateur';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-objet',
  templateUrl: './objet.component.html',
  styleUrls: ['./objet.component.css']
})
export class ObjetComponent implements OnInit {

  utilisateur : Utilisateur
  objet: Objet
  url: String ; 

  constructor(private projetService: ProjetService , private route: ActivatedRoute , public dialog: MatDialog , private router: Router ) { }

  ngOnInit() {
    const objetId = +this.route.snapshot.paramMap.get('id')
    this.projetService.getObjet(objetId).subscribe(
      result => {
        this.objet = result ; 
        this.url = (this.objet.urlAffiche !== "") ? this.objet.urlAffiche : "https://www.labaleine.fr/sites/baleine/files/image-not-found.jpg";
        
        this.projetService.getUtilisateurForObjet(objetId).subscribe(
          resultUtil => {
            this.utilisateur = resultUtil ; }
            ,
            error => console.log('Une erreur est survenue lors du chargement de l"utilsateur', error)
        )
      }
      ,
      error => console.log('Une erreur est survenue lors du chargemetn de l"objet', error)
    )
  }

  
  
}

