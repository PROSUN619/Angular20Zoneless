import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {

  // courseName = signal<string>('Angular Fundamentals');
  // courseDuration = signal<number>(40);
  // couseDetails = computed(() => {
  //   return `${this.courseName()} - Duration: ${this.courseDuration()} hours` 
  // } );

  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  showCount = signal(false);


  conditionalCount = computed(() => {
    console.log('Conditional count running'); 
    if (!this.showCount()) {
      return "nothing to show here";
    }else {
      return "The count value is: " + this.count();
    }
  });

  getCondition(){
    console.log(this.conditionalCount());
  }

  expensiveComputation = computed(() => {
    console.log('Expensive computation running'); 
    return this.count() * 100;
  });

  expensiveCount(){
    console.log('Expensive count running');
    console.log(this.expensiveComputation());
  }

  updateCount() {
    this.count.update(value => value + 1);
  }

  updateSHowCount() {
    this.showCount.update(value => !value); 
  }
  

  constructor() {
    // Initialization logic can go here
  }

  ngOnInit() {
    //console.log('beforeSet', this.doubleCount());
    //this.count.set(5);
    //console.log('afterSet', this.doubleCount());
  }
}
