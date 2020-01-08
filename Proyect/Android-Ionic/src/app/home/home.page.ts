import { Component } from '@angular/core';
import { Dictionary } from 'src/classes/dictionary';
import { TranslatorService } from '../services/translator.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //public xxx:Dictionary;
  public hola:string;

  constructor(private translator:TranslatorService) {
    //this.xxx = new Dictionary(new Map<String,String>(),new Map<String,String>(),new Map<String,String>());
    //console.log("ÑACAÑACA: " + this.xxx.english.get("HomeBodyTitle"));
    //this.hola = "hahahhahah"
  }

  // METHODS

  onclick(){
    this.hola = this.translator.actualDictionary.get("HomeBodyTitle");
    //console.log("PEDOOOOOOOOO");
  }

}
