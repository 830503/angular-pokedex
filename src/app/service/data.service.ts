import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) {}

  //get Pokemons
  getPokemons(limit: number, offset: number) {
    return this.http.get(
      `${this.baseUrl}pokemon?limit=${limit}&offset=${offset}`
    );
  }

  //get more pokemons data
  getMoreData(pokemon: string | number) {
    return this.http.get(`${this.baseUrl}pokemon/${pokemon}`);
  }
}
