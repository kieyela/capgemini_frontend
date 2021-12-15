import { Component, OnInit } from '@angular/core';
import { Piece } from '../modelP/pieces';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

  pieces : Piece [] | undefined;
  constructor() { }


  ngOnInit(): void {

    this.pieces = [
      { 
         Id : 1 , piece:'Screw of size 10' , stock : 30 , treshold : 100 , lastorder:10, price : 450 
      },
      { 
        Id : 1 , piece:'Screw of size 10' , stock : 30 , treshold : 100 , lastorder:10, price : 450 
     }

   
    
  ]

  }

}
