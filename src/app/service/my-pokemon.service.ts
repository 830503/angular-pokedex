import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyPokemonService {
  myPokemons: any[] = [];

  savePoke(myPokemon: string) {
    this.myPokemons.push(myPokemon);
    console.log(this.myPokemons);
  }

  constructor() {}
}
