import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { MatchComponent } from "./summoner/history/match/match.component";
import { SummonerComponent } from "./summoner/summoner.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule }   from "@angular/router";
import { HistoryComponent } from "./summoner/history/history.component";
import { ConfigService } from "app/config.service";
import { TeamComponent } from './summoner/history/match/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MatchComponent,
    SummonerComponent,
    HistoryComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
