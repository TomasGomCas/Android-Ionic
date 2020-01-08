import { Component, OnInit } from '@angular/core';
// IMPORTS
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

// CLASSES
import { Message } from '../../classes/message';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.page.html',
  styleUrls: ['./wall.page.scss'],
})
export class WallPage implements OnInit {

  // ATRIBUTOS
  private messages:Message[] = [];
  private text:string;

  // CONSTRUCTOR
   constructor(private http:HttpClient,public loadingController: LoadingController) {
    this.getAllMessages();
  }

  ngOnInit() {
  }

  async getAllMessages(){

    this.loadingController.create({
        message: 'Loading messages...',
      }).then(loading => loading.present());

    this.http.get("https://curriculum-213a8.firebaseio.com/Muro.json").subscribe(
      (data:any) => {    
        for (const key in data) {
            var message = new Message(data[key].user, 
              data[key].text,
              );
            this.messages.push(message); 
            //this.messages.
        }
        this.loadingController.dismiss();
       },
       error => {
        this.loadingController.dismiss();
       }
     );
  }

  sendMessage(){

    this.loadingController.create({
      message: 'Loading messages...',
    }).then(loading => loading.present());

    var message = new Message("Desconocido", 
      this.text
      ); 
    
     this.http.post("https://curriculum-213a8.firebaseio.com/Muro.json",message).subscribe(
       (data:any) => {
        this.loadingController.dismiss();
         location.reload();   
       },
       error => {
        this.loadingController.dismiss();
       }
     );
  }


}
