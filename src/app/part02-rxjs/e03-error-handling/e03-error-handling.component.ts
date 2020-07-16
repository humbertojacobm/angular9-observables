import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-e03-error-handling',
  templateUrl: './e03-error-handling.component.html',
  styleUrls: ['./e03-error-handling.component.css']
})
export class E03ErrorHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  e01UserCatchError()  {
    const apiData = ajax('/api/data').pipe(
      retry(3),
      map(res => {
        if(!res.response){
          throw new Error('Value expected');
        }
        return res.response;
      }),
      catchError(err => of([]))
    );

    apiData.subscribe({
      next(x){console.log('data: ',x)},
      error(err){console.log('errors already caught... will not run')}
    })

  }

}
