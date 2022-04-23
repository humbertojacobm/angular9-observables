import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA } from './Data';
import { PeriodicElement } from './PeriodicElement.Model';

@Component({
  selector: 'app-e05-table-sorting-data-accesor',
  templateUrl: './e05-table-sorting-data-accesor.component.html',
  styleUrls: ['./e05-table-sorting-data-accesor.component.css']
})
export class E05TableSortingDataAccesorComponent implements OnInit, AfterViewInit  {


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
    this.dataSource.sortingDataAccessor = this.customeSortingDataAccessor;
  }

  customeSortingDataAccessor(data: PeriodicElement, sortHeaderId: string): any {
    if(sortHeaderId === "weight"){
      return data.weightxx;
    }else{
      return data[sortHeaderId];
    }
  }

}
