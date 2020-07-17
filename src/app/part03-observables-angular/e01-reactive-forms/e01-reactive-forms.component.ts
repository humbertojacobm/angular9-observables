import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-e01-reactive-forms',
  templateUrl: './e01-reactive-forms.component.html',
  styleUrls: ['./e01-reactive-forms.component.css']
})
export class E01ReactiveFormsComponent implements OnInit {

  nameChangeLog: string[]=[];
  heroForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.logNameChange();
  }

  logNameChange(){
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }

}
