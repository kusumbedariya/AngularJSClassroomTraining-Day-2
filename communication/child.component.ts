import { Component, Input } from "@angular/core";

@Component({
    inputs : ['childprop'],
    selector : 'app-child',
    template : `
      <div class="childbox">
          Hello from child
          <h2>{{ childprop }}</h2>
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
    constructor() {}
}