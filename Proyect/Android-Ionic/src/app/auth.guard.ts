import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// IMPORTS
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  
  // ATRIBUTES
  router : Router;
  auth : HttpService;

 // CONSTRUCTOR
 constructor(router:Router,auth:HttpService){
  this.router = router;
  this.auth = auth;
}
// ACTIVADOR
canActivate():boolean {
  if (this.auth.login==true) {
    return true;
  }
  else{
    this.router.navigate(['login']);
    return false;
  } 
}


}
