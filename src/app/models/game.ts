export class Game {
  seasonId: number;
  queueId: number;
  gameId: number;
  participantIdentities: ParticipantIdentity[];
  gameVersion: string;
  platformId: string;
  gameMode: string;
  mapId: number;
  gameType: string;
  teams: TeamStats[];
  participants: Participant[];
  gameDuration: number;
  gameCreation: number;
}

export class ParticipantIdentity {
  player:	Player;
  participantId: number;
}

export class Player {
  currentPlatformId: string;
  summonerName: string;
  matchHistoryUri: string;
  platformId: string;
  currentAccountId: number;
  profileIcon: number;
  summonerId: number;
  accountId: number;
}

export class TeamStats {
  firstDragon: boolean;
  firstInhibitor: boolean;
  bans: TeamBans[];
  baronKills: number;
  firstRiftHerald: boolean;
  firstBaron: boolean;
  riftHeraldKills: number;
  firstBlood: boolean;
  teamId: number;
  firstTower: boolean;
  vilemawKills: number;
  inhibitorKills: number;
  towerKills: number;
  dominionVictoryScore: number;
  win: string;
  dragonKills: number;
}

export class TeamBans {
  pickTurn: number;
  championId: number;
}

export class Participant {
  stats: ParticipantStats;
  participantId: number;
  runes: Rune[];
  timeline: ParticipantTimeline;
  teamId: number;
  spell2Id: number;
  masteries: Mastery[];
  highestAchievedSeasonTier: string;
  spell1Id: number;
  championId: number;
}

export class ParticipantStats {
  physicalDamageDealt: number;
  neutralMinionsKilledTeamJungle: number;
  magicDamageDealt: number;
  totalPlayerScore: number;
  deaths: number;
  win: boolean;
  neutralMinionsKilledEnemyJungle: number;
  altarsCaptured: number;
  largestCriticalStrike: number;
  totalDamageDealt: number;
  magicDamageDealtToChampions: number;
  visionWardsBoughtInGame: number;
  damageDealtToObjectives: number;
  largestKillingSpree: number;
  item1: number;
  quadraKills: number;
  teamObjective: number;
  totalTimeCrowdControlDealt: number;
  numberestTimeSpentLiving: number;
  wardsKilled: number;
  firstTowerAssist: boolean;
  firstTowerKill: boolean;
  item2: number;
  item3: number;
  item0: number;
  firstBloodAssist: boolean;
  visionScore: number;
  wardsPlaced: number;
  item4: number;
  item5: number;
  item6: number;
  turretKills: number;
  tripleKills: number;
  damageSelfMitigated: number;
  champLevel: number;
  nodeNeutralizeAssist: number;
  firstInhibitorKill: boolean;
  goldEarned: number;
  magicalDamageTaken: number;
  kills: number;
  doubleKills: number;
  nodeCaptureAssist: number;
  trueDamageTaken: number;
  nodeNeutralize: number;
  firstInhibitorAssist: boolean;
  assists: number;
  unrealKills: number;
  neutralMinionsKilled: number;
  objectivePlayerScore: number;
  combatPlayerScore: number;
  damageDealtToTurrets: number;
  altarsNeutralized: number;
  physicalDamageDealtToChampions: number;
  goldSpent: number;
  trueDamageDealt: number;
  trueDamageDealtToChampions: number;
  participantId: number;
  pentaKills: number;
  totalHeal: number;
  totalMinionsKilled: number;
  firstBloodKill: boolean;
  nodeCapture: number;
  largestMultiKill: number;
  sightWardsBoughtInGame: number;
  totalDamageDealtToChampions: number;
  totalUnitsHealed: number;
  inhibitorKills: number;
  totalScoreRank: number;
  totalDamageTaken: number;
  killingSprees: number;
  timeCCingOthers: number;
  physicalDamageTaken: number;
}

export class Rune {
  runeId: number;
  rank: number;
}

export class ParticipantTimeline {
  lane: string;
  participantId: number;
  csDiffPerMinDeltas: Map<string, number>;
  goldPerMinDeltas: Map<string, number>;
  xpDiffPerMinDeltas: Map<string, number>;
  creepsPerMinDeltas: Map<string, number>;
  xpPerMinDeltas: Map<string, number>;
  role: string;
  damageTakenDiffPerMinDeltas: Map<string, number>;
  damageTakenPerMinDeltas: Map<string, number>;
}

export class Mastery {
  masteryId: number;
  rank: number;
}
