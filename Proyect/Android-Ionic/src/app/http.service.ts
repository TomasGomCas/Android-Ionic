import { Injectable } from '@angular/core';
// IMPORTS
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // CONSTRUCTOR
  constructor(private http:HttpClient) {

   }

   // METHODS
   public getAllWallMessage(){
    this.http.get("https://pruebalogin-aa3c4.firebaseio.com/users/1.json").subscribe(
      data => {
        console.log("Datos: " + JSON.stringify(data));
        return JSON.stringify(data);
      },
      err => {
        return err;
      }
    ); 
   }

}
