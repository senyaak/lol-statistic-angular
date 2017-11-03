import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import key from "app/config/api_key";

import { ChampionsInfo } from "app/models/data";

@Injectable()
export class ConfigService {
  private region = "euw1";
  get apiURL(): string {
    return `https://${this.region}.api.riotgames.com/lol/`;
  }
  get clientVersion(): Promise<string> {
    return Promise.resolve("7.21.1");
  }
  get apiKey(): Promise<String> {
    return Promise.resolve(key);
  }

  private _championsInfo;
  get championsInfo(): Promise<ChampionsInfo> {
    // return Promise.resolve("test");
    if (!this._championsInfo) {
      return this.clientVersion.then(version => {
        return this.http.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
      }).then(res => {
        return this._championsInfo = res.toPromise();
      });
    } else {
      return Promise.resolve(this._championsInfo);
    }
  }

  constructor(private http: HttpClient) { }
}
