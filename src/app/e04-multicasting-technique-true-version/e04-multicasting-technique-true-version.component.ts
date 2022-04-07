import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-e04-multicasting-technique-true-version',
  templateUrl: './e04-multicasting-technique-true-version.component.html',
  styleUrls: ['./e04-multicasting-technique-true-version.component.css']
})
export class E04MulticastingTechniqueTrueVersionComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const multiCastSequenceSubscriber=() => {
      const seq = [1,2,3];
      const observers = [];
      let timeoutId;

      return (observer) => {
        observers.push(observer);
        if(observers.length === 1){
          timeoutId = doSequence({
              next(val){
                observers.forEach(obs => obs.next(val));
              },
              complete(){
                observers.slice(0).forEach(obs => obs.complete());
              }
          },seq,0);
        }

        return{
          unsubscribe(){
            observers.splice(observers.indexOf(observer),1);
            if(observers.length === 0){
              clearTimeout(timeoutId);
            }
          }
        }
      }
    }

    const doSequence = (observer, arr,idx) =>{
      return setTimeout(()=> {
        observer.next(arr[idx]);
        if(idx === arr.length -1){
          observer.complete();
        }else{
          doSequence(observer,arr,++idx);
        }
      },1000);
    }

    const multicastSequence = new Observable(multiCastSequenceSubscriber());

    multicastSequence.subscribe({
      next(num) {console.log('1st subscribe: ' + num)},
      complete() {console.log('1st sequence finished.')}
    });

    setTimeout(()=>{
      multicastSequence.subscribe({
        next(num) {console.log('2st subscribe: ' + num)},
        complete() {console.log('2st sequence finished.')}
      });
    },1500)

  }

}
