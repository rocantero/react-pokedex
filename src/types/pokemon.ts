
export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Form {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface HeldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: {
    rarity: number;
    version: {
      name: string;
      url: string;
    };
  }[];
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    version_group: {
      name: string;
      url: string;
    };
    move_learn_method: {
      name: string;
      url: string;
    };
  }[];
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  front_default: string;
  front_shiny: string;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string;
  back_shiny: string;
  back_female: string | null;
  back_shiny_female: string | null;
  other: any | null;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  url?: string;
  name: string;
  abilities?: Ability[];
  base_experience?: number;
  forms?: Form[];
  game_indices?: GameIndex[];
  height?: number;
  held_items?: HeldItem[];
  is_default?: boolean;
  location_area_encounters?: string;
  moves?: Move[];
  order?: number;
  species?: Species;
  sprites?: Sprites;
  stats?: Stat[];
  types?: Type[];
  weight?: number;
  quote?: string;
  author?: string;
}

export interface PokemonLite {
  name: string;
  url: string;
}