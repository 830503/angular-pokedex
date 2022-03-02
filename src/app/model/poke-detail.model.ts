export class PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: any;
  moves: any;
  sprites: any;
  stats: any;

  constructor(
    id: number,
    name: string,
    height: number,
    weight: number,
    types: Type[],
    moves: Move[],
    sprites: Sprite,
    stats: Stat[]
  ) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.types = types;
    this.moves = moves;
    this.sprites = sprites;
    this.stats = stats;
  }
}

class Type {
  type?: {
    name: string;
  };
}

class Sprite {
  front_default?: string;
}

class Move {
  move?: {
    name: string;
  };
}
class Stat {
  stat?: {
    name: string;
  };
}
