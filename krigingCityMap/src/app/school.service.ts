import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SchoolService {

  // URL da nossa API
  private url: string = "http://200.144.244.241:3002/school";

  constructor(private http: Http) { }

  getAllSchools() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  /* Get a single School by ID ("_id"). For example: '58dd2c8be6f8cc9ae0fcfec4' */
  showSchool(id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
