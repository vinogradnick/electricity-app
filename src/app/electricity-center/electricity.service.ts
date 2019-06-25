import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { HttpHeaders } from '@angular/common/http';
import { Host } from '../config';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export abstract class ElectricityService<T>   {
  host: string = Host;
  public type: string;
  constructor(
    private http: HttpClient,
    private mesService: MessageService,
    type: string,

  ) {
    this.type = type;

  }

  public getModel(index: number): Observable<T> {
    console.log('is this');
    return this.http.get<T>(this.host + this.type + '/' + index);

  }
  public getModelArray(): Observable<T[]> {
    let str = this.host + this.type + '/';
    console.log(str);
    return this.http.get<T[]>(str);
  }
  public create(model: T): void {
    let json = JSON.stringify(model);
    console.log(json);
    this.http.post(this.host + this.type, json).subscribe(el =>{
      this.mesService.notifyUser("Объект успешно добавлен");

    }, err => this.mesService.errorMessage('Неудалось создать объект'));
  }
  public update(index: number, model: T): void {
    let json = JSON.stringify(model);
    console.log(json);
    // tslint:disable-next-line:max-line-length
    this.http.put<T>(this.host + this.type + '/' + index, json).subscribe(el =>{
      this.mesService.notifyUser("Объект был успешно изменен");

    }, err => this.mesService.errorMessage('Неудалось обновить объект'));
  }
  public remove(index: number, model: T): void {

    this.http.delete<T>(this.host + this.type + '/' + index).subscribe(el=>{
      this.mesService.notifyUser("Объект успешно удален");

    });
  }
}
