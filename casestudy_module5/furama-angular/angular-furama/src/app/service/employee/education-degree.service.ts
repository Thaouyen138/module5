import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../../model/customer-type";
import {EducationDegree} from "../../model/employee/education-degree";

@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {

  API_URL = "http://localhost:3000/"

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<EducationDegree[]> {
    return this.http.get<EducationDegree[]>(this.API_URL + "educationDegree")
  }
}
