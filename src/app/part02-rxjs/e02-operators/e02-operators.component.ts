import { Component, OnInit } from '@angular/core';
import { of, pipe } from 'rxjs';
import {map, filter} from 'rxjs/operators'

@Component({
  selector: 'app-e02-operators',
  templateUrl: './e02-operators.component.html',
  styleUrls: ['./e02-operators.component.css']
})
export class E02OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.e03PipeShorterForm();
  }

  e01map(){
    const nums = of(1,2,3);
    const squareValues = map((val:number) => val*val);
    const squaredNums = squareValues(nums);

    squaredNums.subscribe(x=> console.log(x));

  }

  e02HowtoUserPipeFunction(){
    const nums = of(1,2,3,4,5);
    const squareOddVals = pipe(
      filter((n: number) => n%2 !== 0),
      map(n=>n*n)
    );
    const squareOdd = squareOddVals(nums);
    squareOdd.subscribe(x=>console.log(x));
  }

  e03PipeShorterForm(){
    const squareOdd = of(1,2,3,4,5)
    .pipe(
      filter(n=> n%2 !==0),
      map(n=> n*n)
    );
    squareOdd.subscribe(x=> console.log(x));

  }

}
