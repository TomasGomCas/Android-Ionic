import { Injectable } from '@angular/core';
import { Dictionary } from 'src/classes/dictionary';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  // ATRIBUTES
  private dictionary:Dictionary;
  public actualDictionary:Map<string,string>

  // CONSTRUCTOR
  constructor() {
    this.dictionary = new Dictionary();
    this.actualDictionary = this.dictionary.english;
   }

   // METHODS


}
