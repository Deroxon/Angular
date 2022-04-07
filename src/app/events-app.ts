import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <events-list></events-list>
  <sec-comp></sec-comp>`
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
