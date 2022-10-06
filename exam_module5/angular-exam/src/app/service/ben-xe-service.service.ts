import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BenXe} from "../model/ben-xe";

@Injectable({
  providedIn: 'root'
})
export class BenXeServiceService {

  API_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  getAll(page: number): Observable<BenXe[]> {
    return this.http.get<BenXe[]>(this.API_URL + `benXeList?page=${page}`);
  }
  update(benXe: BenXe): Observable<void> {
    return this.http.patch<void>(this.API_URL + 'benXeList', benXe);
  }
  save(benXe: BenXe): Observable<void> {
    return this.http.post<void>(this.API_URL + 'benXeList', benXe);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.API_URL + 'benXeList/' + id);
  }
}
