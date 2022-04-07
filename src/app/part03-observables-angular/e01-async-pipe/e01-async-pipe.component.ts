import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-e01-async-pipe',
  templateUrl: './e01-async-pipe.component.html',
  styleUrls: ['./e01-async-pipe.component.css']
})
export class E01AsyncPipeComponent implements OnInit {

  time = new Observable<string>( observer => {
      setInterval(()=> observer.next(new Date().toString()),1000)
  });
  constructor() { }

  ngOnInit() {
  }

}
