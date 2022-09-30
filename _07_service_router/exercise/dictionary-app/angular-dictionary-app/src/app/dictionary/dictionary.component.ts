import {Component, OnInit} from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  dictionary: Dictionary[];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.dictionary = this.dictionaryService.dictionary;

  }

}
