import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app';

import { secComp } from './events/secondComponent';
import { EventsListComponent } from './events/events-list.components';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { CommonModule } from '@angular/common';





@NgModule({
  imports: [
    BrowserModule,
    CommonModule
    
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    secComp,
    EventThumbnailComponent,
    NavBarComponent,
  ],
  
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
