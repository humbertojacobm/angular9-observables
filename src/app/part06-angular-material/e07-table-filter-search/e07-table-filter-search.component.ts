import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ELEMENT_DATA } from './Data';
import { PeriodicElement } from './PeriodicElement.Model';

@Component({
  selector: 'app-e07-table-filter-search',
  templateUrl: './e07-table-filter-search.component.html',
  styleUrls: ['./e07-table-filter-search.component.css']
})
export class E07TableFilterSearchComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position','name','weight','symbol'];
  dataSource =  new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  filterForm: FormGroup;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {   
    this.filterForm = this.fb.group({
      filter: [""]
    });
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
