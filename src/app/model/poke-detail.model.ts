export class PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: any[];
  types: any[];
  moves: any[];
  sprites: any;
  stats: any[];

  constructor(
    id: number,
    name: string,
    height: number,
    weight: number,
    abilities: any[],
    types: any[],
    moves: any[],
    sprites: any,
    stats: any[]
  ) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.types = types;
    this.moves = moves;
    this.sprites = sprites;
    this.stats = stats;
  }
}
