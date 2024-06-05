import { Component} from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    
    <h3> Counter: {{ counter }}</h3>

    <button (click)="incrementaVa(+1)"> +1 </button>
    <button (click)="resetea()">RESET</button>
    <button (click)="incrementaVa(-1)" > -1 </button>
    
    `
})

export class CounterComponent {
    
  public counter: number = 10;
  

  incrementaVa( value: number): void{
    this.counter += value;
  }
  resetea( ){
    this.counter = 10 ;
  }

}
