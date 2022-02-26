import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  page: number = 1;
  totalPages: number;
  offset: number;
  limit: number = 8;

  searchPoke: any[] = [];
  isSearching: boolean = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  //Get pokemons
  getPokemons() {
    this.offset = this.page * this.limit - this.limit;
    this.dataService
      .getPokemons(this.limit, this.offset)
      .subscribe((response: any) => {
        // console.log(response);
        this.totalPages = response.count;

        response.results.forEach((result: { name: string }) => {
          this.dataService
            .getMoreData(result.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons.push(uniqueResponse);
              this.pokemons.sort((a, b) => (a.id > b.id ? 1 : -1));
              console.log(this.pokemons);
            });
        });
      });
  }
  // the searchbar works not well
  getSearch(value: string) {
    const filter = this.pokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLocaleLowerCase());
    });
    this.pokemons = filter;
  }
}
