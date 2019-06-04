import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ElectricityAuthService } from './electricity-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ElectricityCenterGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    public auth:ElectricityAuthService,
    public router:Router
    ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("Electro center guard activated");
      if(this.auth.isLoggedIn){
        return true;
      }
    else{
      this.router.navigate(['/']);
      return false;
    }
      
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
