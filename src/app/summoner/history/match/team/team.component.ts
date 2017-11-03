import { Component, Input, OnInit } from "@angular/core";

import { ConfigService } from "app/config.service";

import { Participant } from "app/models/game";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent implements OnInit {
  private _team: Participant[];
  @Input() set team(team: Participant[]) {
    this._team = team;
    this.championNames = [];
    this.ConfigService.championsInfo.then(res => {
      team.forEach((player: Participant, index) => {
        // getName: {
          for(var key in res.data) {
            if(res.data[key].key == player.championId) {
              this.championNames[index] =  res.data[key].id;
              break ;
            }
          }
        // }
      })
    });
  };
  get team(): Participant[] {
    return this._team;
  }

  private championNames: string[];
  private version: string;

  constructor(private ConfigService: ConfigService) { }
  ngOnInit() {
    this.ConfigService.clientVersion.then((res) => {
      this.version = res;
    });


  }
}
