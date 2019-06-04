import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { HttpHeaders } from '@angular/common/http';
import { Host } from '../config';

@Injectable({
  providedIn: 'root'
})
export abstract class ElectricityService<T>   {
  host: string = Host;
  public type: string;
  constructor(
    private http: HttpClient,
    private mesService: MessageService, type: string
  ) {
    this.type = type;

  }

  public getModel(index: number): Observable<T> {
    return this.http.get<T>(this.host + this.type + '/' + index);

  }
  public getModelArray(): Observable<T[]> {
    let str = this.host + this.type + '/';
    console.log(str);
    return this.http.get<T[]>(str);
  }
  public create(model: T): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    const jsq = JSON.stringify(model);
    console.log(this.host + this.type);
    this.http.post(this.host + this.type, jsq, httpOptions).subscribe(el => console.log(el), err => console.log(err));
  }
  public update(index: number, model: T): void {
    const jsq = JSON.stringify(model);
    this.http.put<T>(this.host + this.type + "change/" + index, jsq);
  }
  public remove(index: number, model: T): void {
    const jsq = JSON.stringify(model);
    this.http.delete<T>(this.host + this.type + "remove/" + index);
  }
}
