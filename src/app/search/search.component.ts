import { Component, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

import { Summoner } from "app/models/summoner";
import { SummonerService } from "app/summoner.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  providers: [SummonerService],
})
export class SearchComponent implements OnInit, OnDestroy{
  private name = "";
  private sub;
  private error: string = null;

  summoner: Summoner;
  @Output() updateSummoner: EventEmitter<Summoner> = new EventEmitter();
  onSelect(summonerName: string): void {
    this.router.navigate([`/${this.name}`]);
    this.summonerService.getSummoner(summonerName).then((result: Summoner) => {
      // FIXME remove log
      this.summoner = result;
      this.updateSummoner.emit(result);
      if (!result) {
        this.error = "Can't get Summoner";
      } else {
        this.error = null;
      }
    });
  }
  constructor(
    private summonerService: SummonerService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      if(params.name && params.name.length > 0) {
        this.onSelect(this.name = params.name);
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
