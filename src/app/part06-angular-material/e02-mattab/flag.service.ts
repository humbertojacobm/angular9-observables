import { _fixedSizeVirtualScrollStrategyFactory } from '@angular/cdk/scrolling';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  private _flag = new BehaviorSubject<boolean>(true);
  readonly flag$ = this._flag.asObservable();

  constructor() { }

  setFlag(value: boolean): void {
    this._flag.next(value);
  }
}
