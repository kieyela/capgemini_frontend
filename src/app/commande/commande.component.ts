import { Component, OnInit } from '@angular/core';
import { Commande } from '../modelP/commandes';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  commandes  : Commande [] | undefined;
  constructor() { }

  ngOnInit(): void {

    this.commandes = [

        {
          Id : 1 , nom : '' , stock :30 , date : '10/10/2020'  , quantite : 50 , price :150
        }
    ]
  }

}
