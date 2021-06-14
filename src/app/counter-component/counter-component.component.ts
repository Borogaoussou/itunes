import { OnInit, Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  //templateUrl: './counter-component.component.html',
  //styleUrls: ['./counter-component.component.css']
  template: `
    <input id="intervalInput" type="number"/>
    <button id="intervalSetButton">Set interval</button>
  `
})
// export class CounterComponentComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class CounterComponentComponent {

}

@Component({
  selector:'display-component',
  template: `
    <app-counter-component [message]="'Hello world'" (tick)=counterTick($event)></app-counter-component>
    <div>{{message}} {{counter}}</div>
  `
})

export class DisplayComponent {
  public counter: number = 0;
  public message: string;

  public counterTick(message: string): void {
    this.message = message;
    this.counter++;
  }
}

@Component({
  template: `<display-component></display-component>`
})

export class PreviewComponent { }

@NgModule({
  declarations: [PreviewComponent, DisplayComponent, CounterComponentComponent],
  entryComponents: [PreviewComponent]
})

export class PreviewModule { }
