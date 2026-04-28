import { Component, signal } from '@angular/core';
import { AppModule } from './app.module';
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-root',
  imports: [AppModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_NgRx');
}
