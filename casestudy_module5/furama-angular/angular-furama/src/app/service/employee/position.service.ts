import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Positions} from "../../model/employee/position";

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  API_URL = "http://localhost:3000/"

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Positions[]> {
    return this.http.get<Positions[]>(this.API_URL + "position")
  }
}
