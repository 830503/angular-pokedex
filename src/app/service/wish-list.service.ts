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
  removeWish(wishList: PokemonDetails) {
    this.wishLists.forEach((value, index) => {
      if (value == wishList) {
        this.wishLists.splice(index, 1);
      }
    });
    console.log(this.wishLists);
  }
}
