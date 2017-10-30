import { Component, Input, OnInit } from "@angular/core";
import { Summoner } from "app/models/summoner";
import { ProfileIconService } from "./profile-icon.service";
@Component({
  selector: "app-summoner",
  templateUrl: "./summoner.component.html",
  styleUrls: ["./summoner.component.css"],
  providers: [ProfileIconService],
})
export class SummonerComponent implements OnInit {
  @Input() summoner: Summoner;
  constructor(private ProfileIconService: ProfileIconService) { }

  ngOnInit() {
  }
}
