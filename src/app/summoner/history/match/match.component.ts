import { Component, Input, OnInit } from "@angular/core";

import { MatchesService } from "app/summoner/matches.service";

import { MatchReference } from  "app/models/matchList";
import { Game } from "app/models/game";

@Component({
  selector: "app-match",
  templateUrl: "./match.component.html",
  styleUrls: ["./match.component.less"]
})
export class MatchComponent implements OnInit {
  @Input() set matchId(id: number) {
    this.MatchesService.getGame(id).then((game: Game) => {
      this.match = game;
    });
  }
  private match: Game;

  @Input() summonerId: number;

  private get gameResult(): string {
    // console.log(this.summonerId);
    try {
      const id = this.match.participantIdentities.find((val) => {
        return val.player.summonerId === this.summonerId;
      }).participantId;
      const teamId = this.match.participants.find(val => val.participantId === id).teamId;
      return this.match.teams.find(val => val.teamId === teamId).win;
    } catch(e) {
      // is is possible that the match is new but summonerId was not updated
      return "Unknown";
    }
  }

  constructor(
    private MatchesService: MatchesService,
  ) { }

  ngOnInit() {
  }
}
