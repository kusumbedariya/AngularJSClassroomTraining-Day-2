import { Component } from "@angular/core";

@Component({
    selector : 'app-parent',
    template : `
    <div class="box">
        <h1>Hello from parent</h1>
            <hr/>
        <input [(ngModel)]='title'/>
        <app-child [childprop]='title'></app-child>
    </div>
    `,
    styles : [`
        .box{border: 2px dotted red}
    `]
})
export class ParentComponent{
    title = 'Hello from parent'
    constructor(){}
}