import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private host:string = "http://172.20.10.5:5000/api/";

  constructor(private http: HttpClient) { }

  loginUser(userData: IUser) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const stringify=JSON.stringify(userData);
    this.http.post<IUser>(this.host+'auth', stringify,httpOptions);
    
  }
  
}
