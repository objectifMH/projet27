import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../projet.service';
import { Objet } from '../objet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  valueSearch:string
  objets: Objet[]
  url: string 

  constructor(private projetService: ProjetService ) { }

  ngOnInit() {
    this.projetService.getObjets().subscribe(
      result => {this.objets = result ; 
        
        for ( let o of this.objets)
        {
          console.log(o.description);
        }
        console.log(this.objets)},
      error => console.error('Erreur, La liste d"Objets ne se charge pas', error)
    )
  }

  maRechercheObjet(){
    console.log(this.valueSearch);
    this.projetService.getObjets().subscribe(
      result => {
        this.objets = result.filter( x => x.description.toLowerCase().includes(this.valueSearch.toLowerCase()));
       
        console.log(this.objets)},
      error => console.error('Erreur, La liste d"Objets ne se charge pas', error)
    )

  }

}
