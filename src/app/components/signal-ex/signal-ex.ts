import { Component, computed, effect, Injector, runInInjectionContext, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {


  count: WritableSignal<number> = signal(0);



  constructor(private injector: Injector) {
  }

  ngOnInit() {
  }

  updateCount() {
    this.count.update(value => value + 1);
  }

  // initializeLogging() {
  //   runInInjectionContext(this.injector, () => {

  //     effect(() => {
  //       console.log('Count changed:', this.count());
  //     });
  //   }
  //   );
  // }

    initializeLogging() {
      effect(() => {
        console.log('Count changed:', this.count());
      }, {injector: this.injector});
  }


}
