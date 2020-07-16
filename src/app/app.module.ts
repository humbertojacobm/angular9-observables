import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { E01CreateMyObservableComponent } from './e01-create-my-observable/e01-create-my-observable.component';
import { E02CreateMyKeyboardObservableComponent } from './e02-create-my-keyboard-observable/e02-create-my-keyboard-observable.component';
import { E03MulticastingTechniqueComponent } from './e03-multicasting-technique/e03-multicasting-technique.component';
import { E04MulticastingTechniqueTrueVersionComponent } from './e04-multicasting-technique-true-version/e04-multicasting-technique-true-version.component';

@NgModule({
  declarations: [
    AppComponent,
    E01CreateMyObservableComponent,
    E02CreateMyKeyboardObservableComponent,
    E03MulticastingTechniqueComponent,
    E04MulticastingTechniqueTrueVersionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
