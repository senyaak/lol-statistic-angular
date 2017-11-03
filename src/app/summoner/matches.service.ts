import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ConfigService } from "app/config.service";

import { MatchList, MatchListQueryParams } from "app/models/matchList";

@Injectable()
export class MatchesService {
  getMatchList(accountId: number, params?: MatchListQueryParams): Promise<MatchList> {
    return this.ConfigService.apiKey.then((api_key) => {
      let optionalParams = "";
      if (params) {
        optionalParams = "&" + Object.getOwnPropertyNames(params).map((paramName) => {
          if (Array.isArray(params[paramName])) {
            return params[paramName].map((val) => {
              return `${paramName}=${val}`;
            }).join("&");
          } else {
            return `${paramName}=${params[paramName]}`;
          }
        }).join("&");
      }

      return this.HttpClient
      .get(`${this.ConfigService.apiURL}match/v3/matchlists/by-account/${accountId}?api_key=${api_key}${optionalParams}`)
      .toPromise().catch((err: HttpErrorResponse) => {
        /*** Error handling ***/
        if (err.status === 403) {
          console.warn("Can't get summoner. Old api key??");
        } else if (err.status === 404) {
          console.log("No match history found.");
        } else {
          console.error("Unknown error", err);
        }
        /*** return null always if something went wrong ***/
        return null;
      });
    });
  }

  getGame(gameId): Promise<any> {
    return this.ConfigService.apiKey.then(api_key => {
      return this.HttpClient.get(`${this.ConfigService.apiURL}match/v3/matches/${gameId}?api_key=${api_key}`).toPromise();
    });
  }

  constructor(
    private HttpClient: HttpClient,
    private ConfigService: ConfigService,
  ) { }
}
