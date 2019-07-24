import { Component, OnInit } from '@angular/core';

// IMPORTS
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // ATRIBUTES
  private email:string;
  private password:string;

  // CONSTRUCTOR
  constructor(private http:HttpClient,public alertController: AlertController) {
    this.email="";
    this.password="";
  }

  ngOnInit() {
  }

  // METHODS
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registration',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Email'
        },
        {
          name: 'password',
          type: 'text',
          placeholder: 'Password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log(JSON.stringify(data)); //to see the object
            console.log(data.email);
            console.log(data.password);
            this.signUp(data.email,data.password)
        }
        }
      ]
    });
    await alert.present();
  }

  signUp(email:string,password:string){
    
    const message:JSON = <JSON><unknown>{
      "email": email,
      "password": password,
      "returnSecureToken": "true",
    }

     this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-r8SZYRjU7PT1JiuRDiACavFc2gISoUk ",message).subscribe(
       (data:any) => {
        console.log(data);
       },
       error => {
        console.log(error);
       }
     );
  }

}
