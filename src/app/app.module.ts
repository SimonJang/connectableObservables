import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routing';
import { AppComponent } from './app.component';

// RxJS example components

import { ColdObservableComponent } from './rxjs-connect-components/coldobservable';
import { HotObservableComponent } from './rxjs-connect-components/hotobservable';
import { RefCountObservableComponent } from './rxjs-connect-components/refcount';
import { PublishReplayComponent } from './rxjs-connect-components/publishreplay';

@NgModule({
  declarations: [
    AppComponent,
    ColdObservableComponent,
    HotObservableComponent,
    RefCountObservableComponent,
    PublishReplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
