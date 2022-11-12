export type MT_DATA = {
  [key: string]: {
    [key: string]: MT_ITEM[]
  }
}

export type MT_ITEM = {
  type: string;
  name?: string;
  unbreakable?: boolean;
  lore?: string[];
  enchantments?: MT_ENCHANTMENT[];
  attributes?: MT_ATTRIBUTE[]
}

export type MT_ATTRIBUTE = {
  name: string;
  type: string;
  min: number;
  max: number;
  slot?: string;
}

export type MT_ENCHANTMENT = {
  type: string;
  min: number;
  max: number;
}

export type MT_CHANCE = {
  common: number;
  rare: number;
  epic: number;
  legendary: number;
}

export type MT_CHANCES = {
  [key: string]: MT_CHANCE
}