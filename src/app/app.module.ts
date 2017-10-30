import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { MatchComponent } from "./summoner/match/match.component";
import { SummonerComponent } from "./summoner/summoner.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule }   from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MatchComponent,
    SummonerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
