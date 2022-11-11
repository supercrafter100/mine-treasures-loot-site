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
  enchantments?: {
    type: string;
    min: number;
    max: number;
  }[];
  attributes?: {
    name: string;
    type: string;
    min: number;
    max: number;
  }[]
}
