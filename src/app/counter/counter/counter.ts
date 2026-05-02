import { Component } from '@angular/core';
import { NgRx } from "../../angular-interview/ng-rx/ng-rx";
import { Buttons } from "../buttons/buttons";
import { CounterOutput } from "../counter-output/counter-output";
import { Store } from '@ngrx/store';
import { CounterInput } from "../counter-input/counter-input";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
  styleUrl: './counter.css',
  imports: [Buttons, CounterOutput, CounterInput],
})
export class Counter {

  // counter: number = 0;

  // constructor( private store: Store<{ counter: { counter: number } }>) { }

  // ngOnInit() {
  //   this.store.select('counter').subscribe(data => {
  //     this.counter = data.counter;
  //   });
  // }


  // incrementCounter() {
  //   this.counterValue++;
  // }

  // decrementCounter() {
  //   this.counterValue--;
  // }

  // resetCounter() {
  //   this.counterValue = 0;
  // }

}
