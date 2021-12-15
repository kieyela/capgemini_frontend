import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitlistComponent } from './produitlist/produitlist.component';
import { CommandeComponent } from './commande/commande.component';
import { PieceComponent } from './piece/piece.component';

const routes: Routes = [
{path:"produitlist", component: ProduitlistComponent},
{path:"commandes", component: CommandeComponent},
{path:"pieces", component: PieceComponent} ,







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
