import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: any;
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.pokemon = data.pokemon;
  }

  ngOnInit(): void {}
}
