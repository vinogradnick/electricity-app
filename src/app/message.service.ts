import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  isDebug: boolean;
  constructor() { }

  sendMessage(data: any) {

  }
  debugMessage(data: any): void {
    if (this.isDebug) {
      console.log(data);
    }
  }
  notifyUser(data: any) {

  }
}
