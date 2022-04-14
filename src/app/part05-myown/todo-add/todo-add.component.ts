import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlagService } from 'src/app/flag.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todoForm: FormGroup;
  constructor(private fb: FormBuilder,
    private flagServie: FlagService
    ) {
    this.todoForm = this.fb.group({
      id: [''],
      value: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.flagServie.create(this.todoForm.value);
    this.todoForm.get("value").setValue("");
  }

}
