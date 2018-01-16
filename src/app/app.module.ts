import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from "./app.routes";
import { BackendModule } from "./BackEnd/backend.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BackendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
