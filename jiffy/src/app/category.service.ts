import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    private apiurl = 'https://localhost:6587/api/serviceType';

  constructor(private httpClient: HttpClient) { }

    getCategories(): Observable<Category[]> {
        return this.httpClient.get<Category[]>(this.apiurl);
    }

    getCategoryById(id: number): Observable<Category> {
        return this.httpClient.get<Category>(`${this.apiurl}/${id}`);
    }

    postCategory(category: Category): Observable<Category> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.httpClient.post<Category>(this.apiurl, category, {headers: headers});
    }

    putCategory(id:number, category: Category): Observable<Category> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.httpClient.put<Category>(`${this.apiurl}/${id}`, category, {headers: headers});
    }

    deleteCategory(id: number): Observable<Category> {
        return this.httpClient.delete<Category>(`${this.apiurl}/${id}`);
    }
}
