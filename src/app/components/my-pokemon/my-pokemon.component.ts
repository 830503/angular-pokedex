import { Component, OnInit } from '@angular/core';
import { MyPokemonService } from '../../service/my-pokemon.service';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { PokemonDetails } from 'src/app/model/poke-detail.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrls: ['./my-pokemon.component.css'],
})
export class MyPokemonComponent implements OnInit {
  myPokes: PokemonDetails[] = [];

  constructor(
    private myPokemon: MyPokemonService,
    private bottomSheet: MatBottomSheet,
    private snackBar: MatSnackBar
  ) {
    this.myPokes = this.myPokemon.myPokemons;
    this.myPokes.sort((a, b) => (a.id > b.id ? 1 : -1));
  }

  ngOnInit(): void {}

  onRemove(poke: PokemonDetails) {
    this.myPokemon.removePoke(poke);
    this.snackBar.open('Pokemon was removed', 'ok', {
      duration: 1000,
    });
  }

  onDetail(pokemon: PokemonDetails) {
    this.bottomSheet.open(PokemonDetailsComponent, { data: { pokemon } });
  }

  identify(index: number, item: PokemonDetails) {
    return item.id;
  }
}
