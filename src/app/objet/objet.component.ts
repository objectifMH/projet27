import { Component, OnInit } from '@angular/core';
import { Objet } from '../objet'
import { ProjetService } from '../projet.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../utilisateur';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleDialogObjet } from '../utilisateur/utilisateur.component';

@Component({
  selector: 'app-objet',
  templateUrl: './objet.component.html',
  styleUrls: ['./objet.component.css']
})
export class ObjetComponent implements OnInit {

  utilisateur: Utilisateur
  objet: Objet
  ObjetUpdate: Objet
  url: String;

  constructor(private projetService: ProjetService, private route: ActivatedRoute, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    const objetId = +this.route.snapshot.paramMap.get('id')
    this.projetService.getObjet(objetId).subscribe(
      result => {
        this.objet = result;
        this.url = (this.objet.urlAffiche !== "") ? this.objet.urlAffiche : "https://www.labaleine.fr/sites/baleine/files/image-not-found.jpg";

        this.projetService.getUtilisateurForObjet(objetId).subscribe(
          resultUtil => {
            this.utilisateur = resultUtil;
          }
          ,
          error => console.log('Une erreur est survenue lors du chargement de l"utilsateur', error)
        )
      }
      ,
      error => console.log('Une erreur est survenue lors du chargemetn de l"objet', error)
    )
  }



  editerObjet(editObjet: Objet) {
    const dialogRef = this.dialog.open(DialogContentExampleDialogObjet, {
      data: { utilisateur: this.utilisateur }
    });
    dialogRef.afterClosed().subscribe(result => {

      this.ObjetUpdate = editObjet;
      this.ObjetUpdate.description = result.value.description;
      this.ObjetUpdate.urlAffiche = result.value.urlAffiche;

      if (result.valid) {

        this.projetService.updateObjet(this.ObjetUpdate).subscribe(
          () => {
            this.getObjetById(this.ObjetUpdate);
            this.router.navigateByUrl('/objets/' + this.ObjetUpdate.id);
          }
        )
      }
    },
      error => console.debug(error));
  }

  getObjetById(objet: Objet) {
    this.projetService.getObjet(objet.id).subscribe(
      result => { this.objet = result; }
    )
  }


}

