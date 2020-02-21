import { Component } from '@angular/core';

@Component({
    selector: 'app-pipe',
    template: `
    <p>Urodzinki stronki {{ birthday | date:format }}</p>
    <button (click)="toggleFormat()">Inny Format</button>`
  })
  export class HeroBirthday2Component {
    birthday = new Date(2020, 2, 18);
    toggle = true;
  
    get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
    toggleFormat() { this.toggle = !this.toggle; }
  }