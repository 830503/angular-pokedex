import { Injectable } from '@angular/core';
import { PokemonDetails } from '../model/poke-detail.model';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  wishLists: PokemonDetails[] = [];

  constructor() {}

  saveWish(wishList: PokemonDetails) {
    this.wishLists.push(wishList);
    console.log(this.wishLists);
  }
}
