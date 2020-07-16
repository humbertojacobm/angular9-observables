import { Component, OnInit } from '@angular/core';
import { from,
        interval,
        fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-e01-observable-from-promise',
  templateUrl: './e01-observable-from-promise.component.html',
  styleUrls: ['./e01-observable-from-promise.component.css']
})
export class E01ObservableFromPromiseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.e02ObservableFromCounter();
    this.e03ObservableFromEvent();
  }

  e01ObservableFromPromise(){

    const data = from(fetch('api/endpoint'));
    data.subscribe({
       next(response){},
       error(err){},
       complete(){}
    });
  }

  e02ObservableFromCounter(){
    const secondsCounter = interval(1000);
    secondsCounter.subscribe( n => {
      console.log(`It's been ${n} seconds since subscribing!`)
    })
  }

  e03ObservableFromEvent(){
    const el = document.getElementById('my-element');
    const mouseEvents = fromEvent(el,"mousemove");

    const subscription = mouseEvents.subscribe(
      (evt: MouseEvent) => {
        console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
        if(evt.clientX < 40 && evt.clientY < 40){
          subscription.unsubscribe();
        }
      }
    )
  }

  e04ObservableCreateAjax(){
    const apiData = ajax('api/data');
    apiData.subscribe( res => console.log(res.status, res.response));
  }

}
