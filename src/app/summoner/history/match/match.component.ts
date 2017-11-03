import { Component, Input, OnInit } from "@angular/core";

import { MatchesService } from "app/summoner/matches.service";

import { MatchReference } from  "app/models/matchList";
import { Game } from "app/models/game"

@Component({
  selector: "app-match",
  templateUrl: "./match.component.html",
  styleUrls: ["./match.component.css"]
})
export class MatchComponent implements OnInit {
  @Input() set matchId(id: number) {
    this.MatchesService.getGame(id).then((game: Game) => {
      this.match = game;
      // console.log(game.participants[0].);
    });
  }
  private match: Game;

  constructor(
    private MatchesService: MatchesService,
  ) { }

  ngOnInit() {
  }
}
