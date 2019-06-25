import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Table} from './Table';
import {Observable} from 'rxjs';
import {Host} from '../../config';

@Injectable({
  providedIn: 'root'
})
export class ConstructorService {

  constructor(private http:HttpClient) { }
  public postData(table:Table):Observable<any[]>{
    let json=JSON.stringify(table);
    return this.http.post<any[]>(Host+"request/",json);
  }
}
