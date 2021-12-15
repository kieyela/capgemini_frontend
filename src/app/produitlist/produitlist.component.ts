import { Component, OnInit } from '@angular/core';
import { Produits } from '../modelP/produit';

@Component({
  selector: 'app-produitlist',
  templateUrl: './produitlist.component.html',
  styleUrls: ['./produitlist.component.css']
})
export class ProduitlistComponent implements OnInit {
  produitlist : Produits[] | undefined;
  constructor() { }

  ngOnInit(): void {
    this.produitlist = [
      {
        Id:1,title:'chemise',prix:120,quantite:300
      }
      ,
      {
        Id:2,title:'chemise2',prix:130,quantite:400
      },
      {
        Id:3,title:'chemise3',prix:140,quantite:500
      }
    ]
    
  }
}
