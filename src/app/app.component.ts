import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <input type="text" name="" id="" [(ngModel)]="value">
    <compo [val]='value' (undoEvent)="valueChange($event)"></compo>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Tour of Heroes';
  value : string;

  valueChange(event :string ) {
    this.value = event;
  }
}
