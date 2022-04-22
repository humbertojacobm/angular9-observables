import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { E01CreateMyObservableComponent } from './e01-create-my-observable/e01-create-my-observable.component';
import { E02CreateMyKeyboardObservableComponent } from './e02-create-my-keyboard-observable/e02-create-my-keyboard-observable.component';
import { E03MulticastingTechniqueComponent } from './e03-multicasting-technique/e03-multicasting-technique.component';
import { E04MulticastingTechniqueTrueVersionComponent } from './e04-multicasting-technique-true-version/e04-multicasting-technique-true-version.component';
import { E01ObservableFromPromiseComponent } from './part02-rxjs/e01-observable-from-promise/e01-observable-from-promise.component';
import { E02OperatorsComponent } from './part02-rxjs/e02-operators/e02-operators.component';
import { E03ErrorHandlingComponent } from './part02-rxjs/e03-error-handling/e03-error-handling.component';
import { E01AsyncPipeComponent } from './part03-observables-angular/e01-async-pipe/e01-async-pipe.component';
import { E01ReactiveFormsComponent } from './part03-observables-angular/e01-reactive-forms/e01-reactive-forms.component';
import { E01TypeAHeadComponent } from './part04-practical-observables/e01-type-a-head/e01-type-a-head.component';
import { E02BackoffComponent } from './part04-practical-observables/e02-backoff/e02-backoff.component';
import { E01ExampleComponent } from './part05-myown/e01-example/e01-example.component';
import { FlagService } from './flag.service';
import { TodoListComponent } from './part05-myown/todo-list/todo-list.component';
import { TodoAddComponent } from './part05-myown/todo-add/todo-add.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { E01FirstMaterialComponent } from './part06-angular-material/e01-first-material/e01-first-material.component';
import { E02MattabComponent } from './part06-angular-material/e02-mattab/e02-mattab.component';
import { E03MatTableComponent } from './part06-angular-material/e03-mat-table/e03-mat-table.component';

@NgModule({
  declarations: [
    AppComponent,
    E01CreateMyObservableComponent,
    E02CreateMyKeyboardObservableComponent,
    E03MulticastingTechniqueComponent,
    E04MulticastingTechniqueTrueVersionComponent,
    E01ObservableFromPromiseComponent,
    E02OperatorsComponent,
    E03ErrorHandlingComponent,
    E01AsyncPipeComponent,
    E01ReactiveFormsComponent,
    E01TypeAHeadComponent,
    E02BackoffComponent,
    E01ExampleComponent,
    TodoListComponent,
    TodoAddComponent,
    E01FirstMaterialComponent,
    E02MattabComponent,
    E03MatTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [FlagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
