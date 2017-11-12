import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MapService {

  // URL da nossa API
  private url: string = "http://localhost:3000/schoolbs/intervals";

  constructor(private http: Http) { }

  showSchoolsByIndicator(indicator, min, max) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/' + indicator + '/' + min + '/' + max)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
