import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  login:boolean;

  // CONSTRUCTOR
  constructor() {
    this.login=false;
   }

   // METHODS

}
