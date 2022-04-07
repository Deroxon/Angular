import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <events-list></events-list>
  <sec-comp></sec-comp>`
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
