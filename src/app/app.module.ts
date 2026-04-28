import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideStore, StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reduder';
// import { RouterOutlet, RouterLink } from '@angular/router';
import { Counter } from './counter/counter/counter';
import { Buttons } from './counter/buttons/buttons';
import { CounterOutput } from './counter/counter-output/counter-output';




@NgModule({
  declarations: [
              
  ],
  imports: [
    Counter,
    CounterOutput,
    Buttons,
    CommonModule,
    // RouterOutlet,
    // RouterLink,
    // StoreModule.forRoot({ counter: counterReducer })
  ],

  // providers: [
  //   provideStore({ counter: counterReducer }) // <-- critical in Angular 21
  // ],
  
  exports: [
       
  ]
})
export class AppModule { }
