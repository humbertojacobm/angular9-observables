import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E05TableSortingDataAccesorComponent } from './e05-table-sorting-data-accesor.component';

describe('E05TableSortingDataAccesorComponent', () => {
  let component: E05TableSortingDataAccesorComponent;
  let fixture: ComponentFixture<E05TableSortingDataAccesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E05TableSortingDataAccesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E05TableSortingDataAccesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
