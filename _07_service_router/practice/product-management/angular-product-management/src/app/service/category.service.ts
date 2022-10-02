import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>("http://localhost:3000/categories")

  }
}
