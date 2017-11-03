export class ChampionsInfo {
  data: Map<string, ChampionInfo>;
  format: string;
  type: string;
  version: string;
}

export class ChampionInfo {
  blurb: string;
  id: string;
  image: {
    full: string;
    group: string;
    sprite: string;
    h: number;
    w: number;
    x: number;
    y: number;
  }
  info:{
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  }
  key: string; // numeric
  name: string;
  partype: string;
  stats: any;//{hp: 580, hpperlevel: 85, mp: 100, mpperlevel: 0, movespeed: 345, …}
  tags: string[];
  title: string;
  version: string;
}
