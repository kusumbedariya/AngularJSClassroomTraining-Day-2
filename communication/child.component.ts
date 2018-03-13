import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
   //  inputs : ['childprop'],
    selector : 'app-child',
    template : `
      <div class="childbox">
          Hello from child
          <h2>{{ childprop }}</h2>
          <hr/>
          <button (click)='clickHandler($event)'>Click Me</button>
      </div>
    `,styles : [`
    .childbox{
        border: 2px dotted green;
        margin : 10px;
        padding : 10px;
    }
`]
})
export class ChildComponent{
    @Input() childprop:string ;
    @Output() childEvent:EventEmitter = new EventEmitter() ;
    constructor() {}
    clickHandler(evt){
        // alert('you clicked me');
        this.childEvent.emit('Hello from IBM Pune');
    }
}