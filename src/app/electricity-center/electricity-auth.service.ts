import { Injectable } from '@angular/core';
import { WorkerService } from '../worker/worker.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import {Host} from '../config';
@Injectable({
  providedIn: 'root'
})
export class ElectricityAuthService {
  isAuth: boolean;
  host: string = Host+'auth';
  public userName:string;
  public role:string;
  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    private router: Router) { }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    return false;
  }
  login(username: string, password: string) {
    const json = JSON.stringify({ Name: username, Password: password });
    this.http.post(this.host, json)
      .subscribe((resp: any) => {
        this.router.navigate(['/electro/main']);
        localStorage.setItem('auth_token', resp.access_token);

      });
  }
  logout() {
    localStorage.removeItem('auth_token');
  }
  public get isLoggedIn() {
    return localStorage.getItem('auth_token') != null;
  }

}
