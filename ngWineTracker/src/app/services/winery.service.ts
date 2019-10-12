import { Winery } from './../models/winery';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WineryService {

  wineries: Winery[] = [];
  wineList: Wine[] =[];

  private baseUrl = 'http://localhost:8090/api/';
  private url = this.baseUrl + 'wineries';

  constructor(private http: HttpClient) { }

  index() {
    return this.http.get<Winery[]>(this.url)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in WineryService.index()');
        })
      );
  }

  show(id: string) {
    return this.http.get<Winery>(this.url + '/' + id)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Error in WineryService.index()');
      })
    );
  }

  create(winery: Winery) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.url, winery)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in WineryService.create()');
        })
      );
  }


}
