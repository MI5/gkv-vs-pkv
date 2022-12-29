import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MySpaceshipComponent } from './my-spaceship/my-spaceship.component';

@NgModule({
  declarations: [
    AppComponent,
    MySpaceshipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
