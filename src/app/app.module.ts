import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { MatchComponent } from "./summoner/history/match/match.component";
import { SummonerComponent } from "./summoner/summoner.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes }   from "@angular/router";
import { HistoryComponent } from "./summoner/history/history.component";
import { ConfigService } from "app/config.service";
import { TeamComponent } from "./summoner/history/match/team/team.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { MainComponent } from "./main/main.component";



const appRoutes: Routes = [
  { path: ":name", component: MainComponent },
  { path: "", component: MainComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MatchComponent,
    SummonerComponent,
    HistoryComponent,
    TeamComponent,
    PageNotFoundComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
