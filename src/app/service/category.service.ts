import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../modal/Modal';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  addCategory(category: Category): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8080/api/addCategory`,
      category
    );
  }

  editCategory(category: Category, id: number): Observable<any> {
    return this.http.put<any>(
      `http://localhost:8080/api/editCategory/${id}`,
      category
    );
  }
  deleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(
      `http://localhost:8080/api/deleteCategory/${id}`
    );
  }
  findCategory(id: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/findCategory/${id}`
    );
  }
  findCategories(): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:8080/api/findCategories`);
  }
}
