import { Component, OnInit } from '@angular/core';
import { MyPokemonService } from '../../service/my-pokemon.service';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { PokemonDetails } from 'src/app/model/poke-detail.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrls: ['./my-pokemon.component.css'],
})
export class MyPokemonComponent implements OnInit {
  myPokes: PokemonDetails[] = [];

  constructor(
    private myPokemon: MyPokemonService,
    private bottomSheet: MatBottomSheet
  ) {
    this.myPokes = this.myPokemon.myPokemons;
  }

  onDetail(pokemon: PokemonDetails): void {
    this.bottomSheet.open(PokemonDetailsComponent, { data: { pokemon } });
  }

  ngOnInit(): void {}
}
