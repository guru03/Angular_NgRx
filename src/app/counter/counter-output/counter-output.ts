import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { selectCounterValue } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  imports: [AsyncPipe],
  templateUrl: './counter-output.html',
  styleUrl: './counter-output.css',
})
export class CounterOutput implements OnInit {
  // @Input() counterValue: number = 0;

  counterValue$!: Observable<number>;

  // counterValue$!: Observable<CounterState>;

  constructor( private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
    this.counterValue$ = this.store.select(selectCounterValue);
  }
}
