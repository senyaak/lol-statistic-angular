import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Summoner } from "app/models/summoner";
import { SummonerService } from "app/summoner.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  providers: [SummonerService],
})
export class SearchComponent implements OnInit {
  name = "";
  error: string = null;
  summoner: Summoner;
  @Output() updateSummoner: EventEmitter<Summoner> = new EventEmitter();
  onSelect(summonerName: string): void {
    this.summonerService.getSummoner(summonerName).then((result: Summoner) => {
      // FIXME remove log
      console.log("Result ", result);
      this.summoner = result;
      this.updateSummoner.emit(result);
      if (!result) {
        this.error = "Can't get Summoner";
      } else {
        this.error = null;
      }
    });
  }
  constructor(private summonerService: SummonerService) { }

  ngOnInit() {
  }

}
