export class PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: string[];
  types: string[];
  moves: string[];
  sprites: string;

  constructor(
    id: number,
    name: string,
    height: number,
    weight: number,
    abilities: string[],
    types: string[],
    moves: string[],
    sprites: string
  ) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.types = types;
    this.moves = moves;
    this.sprites = sprites;
  }
}
