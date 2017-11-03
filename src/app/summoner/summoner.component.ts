import { Component, Input, OnInit } from "@angular/core";

import { ConfigService } from "app/config.service";
import { MatchesService } from "app/summoner/matches.service";

import { Summoner } from "app/models/summoner";
import { MatchList } from "app/models/matchList";


@Component({
  selector: "app-summoner",
  templateUrl: "./summoner.component.html",
  styleUrls: ["./summoner.component.css"],
  providers: [MatchesService],
})
export class SummonerComponent implements OnInit {
  _summoner: Summoner;
  @Input() set summoner(value: Summoner) {
    this._summoner = value;
    // TODO get statistics
    this.MatchesService.getMatchList(value.accountId, {beginIndex: 0, endIndex: 4}).then(matchList => {
      console.log(matchList);
      this.matchList = matchList;
    });
  }
  get summoner(): Summoner {
    return this._summoner;
  }

  matchList: MatchList;

  version: string;

  constructor(
    private MatchesService: MatchesService,
    private ConfigService: ConfigService,
  ) { }

  ngOnInit() {
    this.ConfigService.clientVersion.then(version => this.version = version);
  }
}
