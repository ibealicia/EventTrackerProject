import { Wine } from './../models/wine';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  wines: Wine[] = [];

  private baseUrl = 'http://localhost:8090/api/';
  private url = this.baseUrl + 'wines';

  constructor(private http: HttpClient) { }

  index() {
    return this.http.get<Wine[]>(this.url)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in WineService.index()');
        })
      );
  }

  show(id: string) {
    console.log(id);
    return this.http.get<Wine>(this.url + '/' + id)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Error in WineService.index()');
      })
    );
  }

  create(wine: Wine) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.url, wine)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in WineService.create()');
        })
      );
  }

  update(wine: Wine) {
    return this.http.put(this.url + '/' + wine.id, wine)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in WineService.update()');
        })
      );
  }

  destroy(id: number) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in WineService.destroy()');
        })
      );
  }

}
