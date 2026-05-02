import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createCounterAction, updateChannelName } from '../state/counter.action';
import { selectChannelName } from '../state/counter.selectors';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter-input',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './counter-input.html',
  styleUrl: './counter-input.css',
})
export class CounterInput {

  inputValue: number = 0;
  
  channelName$!: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.channelName$ = this.store.select(selectChannelName);
  }

  setCounter() {
    this.store.dispatch(createCounterAction({ counter: this.inputValue }));
    console.log('Counter value set to:', this.inputValue);
  } 

  onUpdateChannelName() {
    this.store.dispatch(updateChannelName({ channelName: "Updated Channel Name" }));
    console.log('Channel name updated');   
  }

}
