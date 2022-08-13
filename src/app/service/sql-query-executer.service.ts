import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SqlQueryExecuterService {

  constructor(private http: HttpClient) { }

  public getResult(id:string, query:string):Observable<any>{
    return this.http.get(`../../assets/data/${id}.json`);
  }
}
