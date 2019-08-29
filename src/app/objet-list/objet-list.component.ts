import { Component, OnInit, Input } from '@angular/core';
import { Objet } from '../objet';

@Component({
  selector: 'app-objet-list',
  templateUrl: './objet-list.component.html',
  styleUrls: ['./objet-list.component.css']
})
export class ObjetListComponent implements OnInit {

  @Input()
  objet: Objet 
  constructor() { }

  ngOnInit() {
  }

}
