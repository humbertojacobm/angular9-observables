import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-e03-multicasting-technique',
  templateUrl: './e03-multicasting-technique.component.html',
  styleUrls: ['./e03-multicasting-technique.component.css']
})
export class E03MulticastingTechniqueComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const sequenceSubscriber = (observer) => {
      const seq = [1,2,3];
      let timeoutId;

      function doSequence(arr,idx){
        timeoutId = setTimeout(()=> {
          observer.next(arr[idx]);
          if(idx === arr.length -1){
            observer.complete();
          }else{
            doSequence(arr,++idx);
          }
        },1000);
      }

      doSequence(seq,0);

      return {
        unsubscribe(){
          clearTimeout(timeoutId);
        }
      }
    }

    const sequence = new Observable(sequenceSubscriber);

    sequence.subscribe({
      next(num) {console.log('1st subscribe: '+num)},
      complete() {console.log('Finished sequence')}
    })

    setTimeout(() => {
      sequence.subscribe({
        next(num) { console.log('2nd subscribe: ' + num); },
        complete() { console.log('2nd sequence finished.'); }
      });
    },500)

  }

}
