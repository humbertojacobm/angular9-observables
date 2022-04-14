import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlagService, Todo } from 'src/app/flag.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;
  constructor(private todoService: FlagService) { 

  } 

  ngOnInit(): void {
    this.todos$ = this.todoService.todos$;
  }

  deleteTodo(id: number): void {
    this.todoService.remove(id);
  }

}
