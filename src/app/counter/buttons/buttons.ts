import { Component, Output, EventEmitter } from '@angular/core';
import { Counter } from '../counter/counter';
import { decrement, increment, reset, } from '../state/counter.action';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons {
  // @Output() increment = new EventEmitter<number>();
  // @Output() decrement = new EventEmitter<number>();
  // @Output() reset = new EventEmitter<number>();

  constructor( private store: Store<{ counter: CounterState }>) { }


  incrementCounter() {
    this.store.dispatch(increment());
    // this.increment.emit();
  }

  decrementCounter() {
    this.store.dispatch(decrement());
    // this.decrement.emit();
  } 

  resetCounter() {
    this.store.dispatch(reset());
    // this.reset.emit();
  }


}
