import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-e01-type-a-head',
  templateUrl: './e01-type-a-head.component.html',
  styleUrls: ['./e01-type-a-head.component.css']
})
export class E01TypeAHeadComponent implements OnInit {



  constructor() { }

  ngOnInit() {
    const searchBox = document.getElementById('search-box');
    const typeahead = fromEvent(searchBox,'input').pipe(
       map((e:KeyboardEvent) => (e.target as HTMLInputElement).value),
       filter(text => text.length>2),
       debounceTime(10),
       distinctUntilChanged(),
      //  switchMap(()=> ajax('api/endpoint'))
    );

    typeahead.subscribe(data => {
        ///aqui puedo poner el codigo para buscar...
        console.log("hmori",data);
    });
  }

}
