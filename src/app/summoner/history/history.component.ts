import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.less"]
})
export class HistoryComponent implements OnInit {
  @Input() matchList;
  @Input() summonerId: number;
  constructor() { }

  ngOnInit() {
  }

}
