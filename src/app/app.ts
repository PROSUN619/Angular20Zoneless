import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalEx } from './components/signal-ex/signal-ex';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SignalEx],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular20Zoneless';
}
