import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../../model/customer-type";
import {Division} from "../../model/employee/division";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  API_URL = "http://localhost:3000/"

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Division[]> {
    return this.http.get<Division[]>(this.API_URL + "division")
  }
}
