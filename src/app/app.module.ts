import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { E01CreateMyObservableComponent } from './e01-create-my-observable/e01-create-my-observable.component';
import { E02CreateMyKeyboardObservableComponent } from './e02-create-my-keyboard-observable/e02-create-my-keyboard-observable.component';
import { E03MulticastingTechniqueComponent } from './e03-multicasting-technique/e03-multicasting-technique.component';
import { E04MulticastingTechniqueTrueVersionComponent } from './e04-multicasting-technique-true-version/e04-multicasting-technique-true-version.component';
import { E01ObservableFromPromiseComponent } from './part02-rxjs/e01-observable-from-promise/e01-observable-from-promise.component';
import { E02OperatorsComponent } from './part02-rxjs/e02-operators/e02-operators.component';
import { E03ErrorHandlingComponent } from './part02-rxjs/e03-error-handling/e03-error-handling.component';

@NgModule({
  declarations: [
    AppComponent,
    E01CreateMyObservableComponent,
    E02CreateMyKeyboardObservableComponent,
    E03MulticastingTechniqueComponent,
    E04MulticastingTechniqueTrueVersionComponent,
    E01ObservableFromPromiseComponent,
    E02OperatorsComponent,
    E03ErrorHandlingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
