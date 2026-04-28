import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { setCounterData, updateChannelName } from '../state/counter.action';
import { selectChannelName } from '../state/counter.selectors';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter-input',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './counter-input.html',
  styleUrl: './counter-input.css',
})
export class CounterInput {

  inputValue: number = 0;
  
  channelName$!: Observable<string>;

  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
    this.channelName$ = this.store.select(selectChannelName);
  }

  setCounter() {
    this.store.dispatch(setCounterData({ counter: this.inputValue }));
    console.log('Counter value set to:', this.inputValue);
  } 

  onUpdateChannelName() {
    this.store.dispatch(updateChannelName());
    console.log('Channel name updated');   
  }

}
