import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../model/customer-type";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  API_URL = "http://localhost:3000/"

  constructor(private http: HttpClient) {
  }

  getAll(name: string, address: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL + "customerList?" + "name_like=" + name +"&" + "address_like=" + address )
  }
  save(customer: Customer): Observable<void> {
    return this.http.post<void>(this.API_URL + "customerList", customer)
  }

  update(customer: Customer): Observable<void> {
    return this.http.patch<void>(this.API_URL + "customerList/" + customer.id, customer)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(this.API_URL + "customerList/"+ id)
  }

}
