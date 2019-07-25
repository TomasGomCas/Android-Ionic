import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  
 // CONSTRUCTOR
 constructor(){
}
// ACTIVADOR
canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean {

  if (true) return true;
  else return false;

}


}
