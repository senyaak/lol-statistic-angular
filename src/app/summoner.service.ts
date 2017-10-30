import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class SummonerService {
  getSummoner(name: string) {
    const result = this.http.get(`https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${name}?api_key=RGAPI-ad312094-7dee-4a28-b275-37784e158918`);
    return result.toPromise();
  }

  constructor(private http: HttpClient) { }

}
