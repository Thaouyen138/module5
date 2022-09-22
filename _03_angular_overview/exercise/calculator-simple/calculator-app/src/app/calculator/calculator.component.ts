import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result= '';

  constructor() { }

  ngOnInit(): void {
  }

  add(number: number) {
    this.result+= ''+ number;
  }


  math(s: string) {
    switch (s){
      case '+':
        this.result += '+';
        break;
      case '-':
        this.result += '-';
        break;
      case '*':
        this.result += '*';
        break;
      case '/':
        this.result += '/';
        break;
    }

  }

  getResult() {
    this.result = eval(this.result)
  }

  delete() {
    this.result = '';
  }
}
