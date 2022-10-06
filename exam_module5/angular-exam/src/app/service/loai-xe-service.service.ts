import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoaiXe} from "../model/loai-xe";

@Injectable({
  providedIn: 'root'
})
export class LoaiXeServiceService {


  API_URL = "http://localhost:8080/"

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<LoaiXe[]> {
    return this.http.get<LoaiXe[]>(this.API_URL + "loaiXeList")
  }
}
