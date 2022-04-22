import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA } from './Data';

@Component({
  selector: 'app-e03-mat-table',
  templateUrl: './e03-mat-table.component.html',
  styleUrls: ['./e03-mat-table.component.css']
})
export class E03MatTableComponent implements OnInit {

  displayedColumns: string[] = ['position','name','weight','symbol'];
  //displayedColumns: string[] = ['position'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
