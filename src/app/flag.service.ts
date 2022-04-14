import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Todo {
  id: any;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  private _todo = new BehaviorSubject<Todo[]>([]);
  readonly todos$ = this._todo.asObservable();
  private todos: Todo[] = [];
  private nextId = 0;

  constructor() { }

  loadAll(){
    this.todos = [];
    this._todo.next(this.todos);
  }

  create(item: Todo) {
    item.id = ++this.nextId;
    this.todos.push(item);
    this._todo.next(Object.assign([],this.todos));//a way to generate pure change    
  }

  remove(id: number){
    this.todos.forEach((t,i) => {
      if(t.id === id){
        this.todos.splice(i,1);//removing
      }
      this._todo.next(Object.assign([], this.todos));
    });
  }
  
}
