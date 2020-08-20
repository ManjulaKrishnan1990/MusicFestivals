import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { HttpClient as Http, HttpHeaders as Headers, HttpParams as RequestOptionsArgs, HttpResponse as Response, HttpParams } from '@angular/common/http';
import {catchError, first, map, tap, timeout} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MusicFestivalServices {
  constructor (
    private http: Http,
    ) {

  }

  loadMusicFestival() {
    const url = `http://e9ac531f4f4f.ngrok.io/MusicFestival/music/api/v1/festivals`;
    return this.http
      .get(url)
      .pipe(
        map((res: any) => res.data),
        catchError(this.handleError),)
  }

  getDagetMusicFestivalData() {
    return this.http.get<any>(`http://e9ac531f4f4f.ngrok.io/MusicFestival/music/api/v1/festivals`);
  }

  private handleError(error: any): Promise<any> {
    console.error('Musical Records API failure', error);
    return Promise.reject(error);
  }


  private log(message: string) {
    console.log("message", message);
  }

}
