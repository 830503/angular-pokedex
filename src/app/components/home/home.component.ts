import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { PokemonDetails } from 'src/app/model/poke-detail.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemons: PokemonDetails[] = [];
  page: number = 1;
  totalPages?: number;
  offset?: number;
  limit: number = 8;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

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
  identify(index: number, item: PokemonDetails) {
    return item.id;
  }
}
