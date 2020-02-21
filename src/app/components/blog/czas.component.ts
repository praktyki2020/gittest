import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-birthday',
  template: `<p align="center">Ostatnia aktualizacja strony {{ birthday | date }}</p>`
})
export class HeroBirthdayComponent {
  birthday = new Date(2020, 2, 22); // April 15, 1988
}