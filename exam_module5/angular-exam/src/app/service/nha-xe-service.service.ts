import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NhaXe} from "../model/nha-xe";

@Injectable({
  providedIn: 'root'
})
export class NhaXeServiceService {


  API_URL = "http://localhost:8080/"

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<NhaXe[]> {
    return this.http.get<NhaXe[]>(this.API_URL + "nhaXeList")
  }
}
