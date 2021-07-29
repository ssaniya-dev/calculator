import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'calculator';
  rowFormat: string[][];

  constructor() {
    this.rowFormat = [
      ['1', '2', '3', '+'],
      ['4', '5', '6', '-'],
      ['7', '8', '9', '*'],
      ['.', '0', '=', '/']
    ];
  }

  getClass(str:string) {
    if (str >= '0' && str <= '9') {
      return 'btn btn-primary';
    } else {
      return 'btn btn-success';
    }
  }
  addTwoNumbers(num1: any, num2: any) {
    if(num1 === null && num2 === null) {
      return 0 
    }
    const add = num1+num2;
    return add;
  }

  divideTwoNumbers(num1: any, num2: any) {
    if(num2 === 0) {
      return undefined;
    }
    const divide = num1/ num2;
    return divide
  }
}
