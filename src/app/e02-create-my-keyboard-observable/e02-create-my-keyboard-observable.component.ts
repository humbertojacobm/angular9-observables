import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

function fromEvent(target,eventName){
  return new Observable((observer) => {
    const handler = (e) => observer.next(e);
    target.addEventListener(eventName,handler);
    return () => {
      target.removeEventListener(eventName,handler);
    }
  });
}

@Component({
  selector: 'app-e02-create-my-keyboard-observable',
  templateUrl: './e02-create-my-keyboard-observable.component.html',
  styleUrls: ['./e02-create-my-keyboard-observable.component.css']
})
export class E02CreateMyKeyboardObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const ESC_KEY = 27;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const subscription = fromEvent(nameInput,'keydown')
     .subscribe(
        (e: KeyboardEvent) => {
          if(e.keyCode === ESC_KEY){
            nameInput.value = '';
          }
        }
     );
  }

}
