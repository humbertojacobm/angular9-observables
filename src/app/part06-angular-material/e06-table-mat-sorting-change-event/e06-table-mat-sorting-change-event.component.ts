import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA } from './Data';
import { PeriodicElement } from './PeriodicElement.Model';

@Component({
  selector: 'app-e06-table-mat-sorting-change-event',
  templateUrl: './e06-table-mat-sorting-change-event.component.html',
  styleUrls: ['./e06-table-mat-sorting-change-event.component.css']
})
export class E06TableMatSortingChangeEventComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position','name','weight','symbol'];
  dataSource =  new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {    
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; //this is linking to elements
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = this.customeSortingDataAccessor;
    this.dataSource.filter = "";//you can use this as filter
  }

  announceSortChange(sortState: Sort){
    if(sortState.direction){
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    }else{
      this._liveAnnouncer.announce(`Sorting cleared`);
    }    
  }

  customeSortingDataAccessor(data: PeriodicElement, sortHeaderId: string): any {
    if(sortHeaderId === "weight"){
      return data.weightxx;
    }else{
      return data[sortHeaderId];
    }
  }

}
