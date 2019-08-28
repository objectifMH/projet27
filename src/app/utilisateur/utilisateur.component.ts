import { Component, OnInit, Input , Inject } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { ProjetService } from '../projet.service'
import { ActivatedRoute, RouterEvent, Router } from '@angular/router'
import { Objet } from '../objet';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Form, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})

export class UtilisateurComponent implements OnInit {

  utilisateur: Utilisateur
  objets : Objet[] ; 
  objetAjout: Objet ;
  url: String ; 
  objet:Objet ; 

  constructor(private projetService: ProjetService ,
     private route: ActivatedRoute ,
     private router:Router ,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UtilisateurComponent>) { }

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

    ajouterObjet(){
      const dialogRef = this.dialog.open(DialogContentExampleDialogObjet , {
        data : { utilisateur: this.utilisateur }
      });
      dialogRef.afterClosed().subscribe(result => 
        {
          
          this.objetAjout = result.value ; 
          this.objetAjout.utilisateurId = this.utilisateur.id ; 
          if ( result.valid )
          {
            this.projetService.AddObjet(this.objetAjout).subscribe(
              () => {
                this.getObjetsForUtilisateur();
                this.router.navigateByUrl('/utilisateurs/'+this.utilisateur.id);}
            )
        }
        },
        error => console.debug(error));
  }

  deleteObjet(obj:Objet) {
    console.log(obj);
    


    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => 
      {
        if ( result )
        {
          this.objet = obj ; 
          this.projetService.delObjetForUtilisateur(this.objet).subscribe(result => 
            {
              this.getObjetsForUtilisateur()
              this.router.navigateByUrl('/utilisateurs/'+this.utilisateur.id);
              
            }) 
      }
      }); 
  }

  getObjetsForUtilisateur() {
    this.projetService.getObjetsByUutilisateur(this.utilisateur.id).subscribe(
      resultObjets => {
        this.objets = resultObjets ;
      }
      ,
      error => console.log('Une erreur est survenue, j"arrive pas à charger '+this.utilisateur.login, error)
      
    )

  }
  

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}



@Component({
  selector: 'dialog-content-example-dialog-objet',
  templateUrl: 'dialog-content-example-dialog-objet.html',
})
export class DialogContentExampleDialogObjet {

  modelObjet: FormGroup

  //utilisateur:Utilisateur = this.data.utilisateur ; 

  

  constructor(private formBuilder: FormBuilder, 
    private projetService:ProjetService , 
    private route:ActivatedRoute , 
    private router: Router) { }

  reg = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z@\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // fragment locator

  ngOnInit() {
    
    this.modelObjet = this.formBuilder.group({
      description: ['', [Validators.required]],
      urlAffiche: ['', [Validators.required, Validators.pattern(this.reg)]]
    })
  }



}
