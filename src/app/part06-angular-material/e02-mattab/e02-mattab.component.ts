import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlagService } from './flag.service';

@Component({
  selector: 'app-e02-mattab',
  templateUrl: './e02-mattab.component.html',
  styleUrls: ['./e02-mattab.component.css']
})
export class E02MattabComponent implements OnInit {

  flag$: Observable<boolean>;
  constructor(private service: FlagService) {
    
   }

  ngOnInit(): void {
    this.flag$ = this.service.flag$;
    setTimeout(() => {
      this.service.setFlag(false);//I want to hide this after 10 seconds.
    },5000)
  }

}
