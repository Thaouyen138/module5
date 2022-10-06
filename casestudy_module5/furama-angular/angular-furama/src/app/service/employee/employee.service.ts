import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../model/customer";
import {Employee} from "../../model/employee/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API_URL = "http://localhost:3000/"

  constructor(private http: HttpClient) {
  }

  getAll(name: string, phone: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_URL + "employeeList?" + "name_like=" + name +"&" + "phone_like=" + phone )
  }
  save(employee: Employee): Observable<void> {
    return this.http.post<void>(this.API_URL + "employeeList", employee)
  }

  update(employee: Employee): Observable<void> {
    return this.http.patch<void>(this.API_URL + "employeeList/" + employee.id, employee)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.API_URL + "employeeList/"+ id)
  }
}
