import { Component } from '@angular/core';
import { CounterOutput } from "../counter-output/counter-output";
import { Buttons } from "../buttons/buttons";

@Component({
  selector: 'app-counter',
  imports: [CounterOutput, Buttons],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  counterValue: number = 0;

  incrementCounter() {
    this.counterValue++;
  }

  decrementCounter() {
    this.counterValue--;
  }

  resetCounter() {
    this.counterValue = 0;
  }

}
