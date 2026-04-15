import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons {
  @Output() increment = new EventEmitter<number>();
  @Output() decrement = new EventEmitter<number>();
  @Output() reset = new EventEmitter<number>();

  incrementCounter() {
    this.increment.emit();
  }

  decrementCounter() {
    this.decrement.emit();
  } 

  resetCounter() {
    this.reset.emit();
  }


}
