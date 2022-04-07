import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app';

import { secComp } from './events/secondComponent';
import { EventsListComponent } from './events/events-list.components';
import { EventThumbnailComponent } from './events/event-thumbnail.component';




@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    secComp,
    EventThumbnailComponent,
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
