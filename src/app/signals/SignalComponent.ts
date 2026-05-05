import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-SignalComponent',
  imports: [],
  templateUrl: './SignalComponent.html',
  styleUrl: './SignalComponent.css',
})
export class SignalComponent {

  count = signal(1);

}
