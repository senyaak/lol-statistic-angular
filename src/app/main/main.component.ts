import { Component, Input } from "@angular/core";
import { Summoner } from "app/models/summoner";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.less"]
})
export class MainComponent {
  curSummoner: Summoner;
  applySummoner(newSummoner): void {
    this.curSummoner = newSummoner;
  }
}
