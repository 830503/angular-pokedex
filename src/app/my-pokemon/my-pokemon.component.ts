import { Component, OnInit, Input } from '@angular/core';
import { MyPokemonService } from '../service/my-pokemon.service';

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrls: ['./my-pokemon.component.css'],
})
export class MyPokemonComponent implements OnInit {
  @Input() myPokes: any[] = [];

  constructor(private myPokemon: MyPokemonService) {
    this.myPokes = this.myPokemon.myPokemons;
  }

  ngOnInit(): void {}
}
