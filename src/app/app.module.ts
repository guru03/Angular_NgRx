import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ],

  // providers: [
  //   provideStore({ counter: counterReducer }) // <-- critical in Angular 21
  // ],
  
  exports: [
       
  ]
})
export class AppModule { }
