import { Component, OnInit } from '@angular/core';
import { pipe, zip, range, timer } from 'rxjs';
import { retryWhen, map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-e02-backoff',
  templateUrl: './e02-backoff.component.html',
  styleUrls: ['./e02-backoff.component.css']
})
export class E02BackoffComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const backoff= (maxTries,ms)=> {
      return pipe(
        retryWhen(attempts => zip(range(1,maxTries),attempts)
                                .pipe(
                                  map(([i])=> i*i),
                                  mergeMap(i => timer(i*ms))
                                )
        )
      )
    }

    ajax('/api/endpoint')
      .pipe(backoff(3,250))
      .subscribe(data => this.handleData(data));
  }

  handleData(data){

  }

}
