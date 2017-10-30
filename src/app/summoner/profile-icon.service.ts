import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProfileIconService {
  // TODO get the last version
  version: string = null || "7.21.1";
  getIcon(id: number) {
    const result = this.http.get(`http://ddragon.leagueoflegends.com/cdn/${this.version}/img/profileicon/${id}.png`);
    return result.toPromise();
  }

  constructor(private http: HttpClient) { }
}
