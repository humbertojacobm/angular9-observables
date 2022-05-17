import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA } from './Data';
import { PeriodicElement } from './PeriodicElement.Model';

@Component({
  selector: 'app-e03-mat-table',
  templateUrl: './e03-mat-table.component.html',
  styleUrls: ['./e03-mat-table.component.css']
})
export class E03MatTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position','name','weight','symbol'];
  dataSource =  new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {    
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; //this is linking to elements
    this.dataSource.sort = this.sort;
  }

}
