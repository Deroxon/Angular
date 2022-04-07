import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app';

import { secComp } from './events/secondComponent';
import { EventsListComponent } from './events/events-list.components';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';




@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    secComp,
    EventThumbnailComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
