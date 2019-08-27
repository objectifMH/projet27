import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjetService } from '../projet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  model: FormGroup
  
  



  constructor(private formBuilder: FormBuilder, private projetService:ProjetService , private route:ActivatedRoute , private router: Router) { }

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
    
    this.model = this.formBuilder.group({
      nom: ['', [Validators.min(3)]],
      prenom: ['', [Validators.min(3)]],
      login: ['', [Validators.min(3) ,Validators.max(8) , Validators.required ]],
      mdp: ['', [Validators.min(3) ,Validators.max(8) , Validators.required ]],
      urlAffiche: ['', [Validators.required, Validators.pattern(this.reg)]]
    })
  }

  
  validationInscription(){
    console.log(this.model);
    if (this.model.valid) {
      this.projetService
        .AddUtilisateur(this.model.value)
        .subscribe(result => this.router.navigateByUrl('/utilisateurs'))
    }
  }


  get nom() {
    return this.model.get('nom')
  }

  get prenom() {
    return this.model.get('prenom')
  }

  get login() {
    return this.model.get('login')
  }

  get mdp() {
    return this.model.get('mdp')
  }

  get urlAffiche() {
    return this.model.get('urlAffiche')
  }
}
