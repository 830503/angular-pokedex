import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyPokemonService } from '../../service/my-pokemon.service';
import { PokemonDetails } from 'src/app/model/poke-detail.model';
import { WishListService } from 'src/app/service/wish-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonDetails[] = [];
  page: number = 1;
  totalPages?: number;
  offset?: number;
  limit: number = 8;

  searchPokes: any[] = [];
  isSearching: boolean = false;
  error = null;

  constructor(
    private dataService: DataService,
    private bottomSheet: MatBottomSheet,
    private snackBar: MatSnackBar,
    private myPokemon: MyPokemonService,
    private wishList: WishListService,
    private router: Router
  ) {
    this.router.navigate([], {
      skipLocationChange: true,
      // queryParamsHandling: 'merge',
    });
  }
  reload() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  ngOnInit() {
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

  // the searchbar

  getSearch(value: string | number) {
    if (value == '') {
      this.isSearching = false;
    } else {
      this.dataService.getMoreData(value).subscribe(
        (uniqueResponse: any) => {
          this.searchPokes.push(uniqueResponse);
          console.log(this.searchPokes);
        },
        (error) => {
          this.error = error.message;
          if (error.status == 404) {
            this.snackBar.open('Sorry, No pokemon funded', 'ok', {
              duration: 1000,
            });
          }
        }
      );
      const filter = this.searchPokes.filter((res: any) => {
        return !res.name.indexOf(value);
      });
      this.isSearching = true;
      this.searchPokes = filter;
    }
  }

  identify(index: number, item: PokemonDetails) {
    return item.id;
  }

  onDetail(pokemon: PokemonDetails): void {
    this.bottomSheet.open(PokemonDetailsComponent, { data: { pokemon } });
  }

  savePoke(poke: PokemonDetails) {
    this.myPokemon.savePoke(poke);
    this.snackBar.open('Pokemon was saved', 'ok', {
      duration: 1000,
    });
  }

  saveList(poke: PokemonDetails) {
    this.wishList.saveWish(poke);
    this.snackBar.open('Pokemon was added', 'ok', {
      duration: 1000,
    });
  }
}
