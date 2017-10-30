import { Component, Input } from "@angular/core";
import { Summoner } from "app/models/summoner";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  curSummoner: Summoner;
  applySummoner(newSummoner): void {
    console.log("emitted", newSummoner);
    this.curSummoner = newSummoner;
  }
}
