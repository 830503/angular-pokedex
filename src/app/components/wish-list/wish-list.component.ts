import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PokemonDetails } from 'src/app/model/poke-detail.model';
import { MyPokemonService } from 'src/app/service/my-pokemon.service';
import { WishListService } from 'src/app/service/wish-list.service';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {
  myWishes: PokemonDetails[] = [];

  constructor(
    private wishList: WishListService,
    private bottomSheet: MatBottomSheet,
    private myPokemon: MyPokemonService,
    private snackBar: MatSnackBar
  ) {
    this.myWishes = this.wishList.wishLists;
    this.myWishes.sort((a, b) => (a.id > b.id ? 1 : -1));
  }

  ngOnInit(): void {}

  onSave(poke: PokemonDetails) {
    this.myPokemon.savePoke(poke);
    this.snackBar.open('Pokemon was saved', 'ok', {
      duration: 1000,
    });
  }
  onRemove(poke: PokemonDetails) {
    this.wishList.removeWish(poke);
    this.snackBar.open('Pokemon was removed', 'ok', {
      duration: 1000,
    });
  }

  onDetail(pokemon: PokemonDetails) {
    this.bottomSheet.open(PokemonDetailsComponent, {
      data: {
        pokemon,
      },
    });
  }
  identify(index: number, item: PokemonDetails) {
    return item.id;
  }
}
