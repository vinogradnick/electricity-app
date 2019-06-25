import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  isDebug: boolean;
  constructor(private snackBar:MatSnackBar) { }

  sendMessage(data: any) {

  }
  debugMessage(data: any): void {
    if (this.isDebug) {
      console.log(data);
    }
  }
  notifyUser(data: any) {
      this.snackBar.open(data,"Принять", {duration:3000});
  }
  errorMessage(data:string){
    let snackBarRef = this.snackBar.open(data, 'Принять',{
      duration: 3000
    });
  }
}
