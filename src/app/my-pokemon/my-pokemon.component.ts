import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrls: ['./my-pokemon.component.css'],
})
export class MyPokemonComponent implements OnInit {
  @Input() myPokes: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
