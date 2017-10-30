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
  summoner: Summoner;
  @Output() updateSummoner: EventEmitter<Summoner> = new EventEmitter();
  onSelect(summonerName: string): void {
    this.summonerService.getSummoner(summonerName).then((result: Summoner) => {
      console.log("Result ", result);
      this.summoner = result;
      this.updateSummoner.emit(result);
    });
  }
  constructor(private summonerService: SummonerService) { }

  ngOnInit() {
  }

}
