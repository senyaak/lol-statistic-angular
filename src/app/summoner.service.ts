import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ConfigService } from "app/config.service";

@Injectable()
export class SummonerService {
  getSummoner(name: string) {
    return this.ConfigService.apiKey.then(api_key => {
      const result = this.http.get(`https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${name}?api_key=${api_key}`);
      return result.toPromise().catch((err: HttpErrorResponse) => {
        /*** Error handling ***/
        if (err.status === 403) {
          console.warn("Can't get summoner. Old api key??");
        } else if (err.status === 404) {
          console.warn("Can't get summoner. Summoner not exist");
        } else {
          console.error("Unknown error", err);
        }
        /*** return null always if something went wrong ***/
        return null;
      });
    });
  }

  constructor(
    private http: HttpClient,
    private ConfigService: ConfigService,
  ) { }
}
