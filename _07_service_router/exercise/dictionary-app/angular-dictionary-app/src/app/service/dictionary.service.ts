import { Injectable } from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  dictionary: Dictionary[] =
    [
      {
        word: 'cat',
        mean: 'con mèo',
        detail: 'con mèo kêu meo meo'
      },
      {
        word: 'dog',
        mean: 'con chó',
        detail: 'con chó sủa gâu gâu'
      },
      {
        word: 'pig',
        mean: 'con lợn',
        detail: 'con lợn kêu éc éc'
      },
      {
        word: 'dog',
        mean: 'con chó',
        detail: 'con chó sủa gâu gâu'
      },
      {
        word: 'chicken',
        mean: 'con gà',
        detail: 'con chó gáy ò ó o'
      },
    ]

  constructor() { }
}
