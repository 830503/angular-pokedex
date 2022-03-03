import { Injectable } from '@angular/core';
import { PokemonDetails } from '../model/poke-detail.model';

@Injectable({
  providedIn: 'root',
})
export class MyPokemonService {
  myPokemons: PokemonDetails[] = [];

  constructor() {}

  savePoke(myPokemon: PokemonDetails) {
    this.myPokemons.push(myPokemon);
    console.log(this.myPokemons);
  }
  removePoke(myPokemon: PokemonDetails) {
    this.myPokemons.forEach((value, index) => {
      if (value == myPokemon) {
        this.myPokemons.splice(index, 1);
      }
    });
  }
}
