import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA } from './Data';
import { PeriodicElementService } from './periodic-element.service';

import { PeriodicElement } from './PeriodicElement.Model';

@Component({
  selector: 'app-e02-filter-firebase',
  templateUrl: './e02-filter-firebase.component.html',
  styleUrls: ['./e02-filter-firebase.component.css']
})
export class E02FilterFirebaseComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position','name','weight','symbol'];
  dataSource =  new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  filterForm: FormGroup;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private fb: FormBuilder,
    private periodicElementService: PeriodicElementService
    ) { }

  ngOnInit(): void {   
    this.periodicElementService.getElements().subscribe((response) => {
      this.dataSource.data = response;
    });
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

  onSubmit(){    
    this.dataSource.filter= (this.filterForm.get("filter") as FormControl).value;
  }

}
