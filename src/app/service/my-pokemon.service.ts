import { Injectable } from '@angular/core';
import { PokemonDetails } from '../model/poke-detail.model';

@Injectable({
  providedIn: 'root',
})
export class MyPokemonService {
  myPokemons: PokemonDetails[] = [];

  savePoke(myPokemon: PokemonDetails) {
    this.myPokemons.push(myPokemon);
    console.log(this.myPokemons);
  }

  constructor() {}
}
