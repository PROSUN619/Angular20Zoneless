import { Component, computed, effect, Injector, runInInjectionContext, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {


  count: WritableSignal<number> = signal(0);
  name: WritableSignal<string> = signal('Angular');




  constructor(private injector: Injector) {
  }

  ngOnInit() {
    setTimeout(() => {
      console.log('Count triggered');
      this.count.set(10);
    },1000);

    setTimeout(() => {
      console.log('Count triggered');
      this.count.set(10);
    },1000);
  }

  updateCount() {
    this.count.update(value => value + 1);
  }


}
