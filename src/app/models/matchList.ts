export class MatchList {
  matches:	MatchReference[];
  totalGames:	number;
  startIndex:	number;
  endIndex:	number;
}

export class MatchReference {
  lane:	string;
  gameId:	number;
  champion:	number;
  platformId:	string	;
  season:	number;
  queue:	number;
  role:	string;
  timestamp:	number;
}

export interface MatchListQueryParams {
  queue?: number[];
  season?: number[];
  champion?: number[];
  endTime?: number;
  beginTime?: number;
  beginIndex?: number;
  endIndex?: number;
}
