import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { MainComponent } from './body/main/main.component';
import { GaleryComponent } from './body/galery/galery.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    MainComponent,
    GaleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
