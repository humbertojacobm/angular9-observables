import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

function sequenceSubscriber(observer){
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();

    return {unsubscribe() {}};

}

@Component({
  selector: 'app-e01-create-my-observable',
  templateUrl: './e01-create-my-observable.component.html',
  styleUrls: ['./e01-create-my-observable.component.css']
})
export class E01CreateMyObservableComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    const sequence= new Observable(sequenceSubscriber);

    sequence.subscribe({
      next(num) {console.log(num)},
      complete() {console.log('Finished sequence')}
    });

  }



}
