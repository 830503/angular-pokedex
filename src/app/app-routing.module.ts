import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPokemonComponent } from './components/my-pokemon/my-pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: 'list', component: PokemonListComponent },

  { path: 'my-pokemon', component: MyPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
