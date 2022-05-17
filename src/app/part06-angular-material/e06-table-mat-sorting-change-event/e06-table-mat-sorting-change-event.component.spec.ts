import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E06TableMatSortingChangeEventComponent } from './e06-table-mat-sorting-change-event.component';

describe('E06TableMatSortingChangeEventComponent', () => {
  let component: E06TableMatSortingChangeEventComponent;
  let fixture: ComponentFixture<E06TableMatSortingChangeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E06TableMatSortingChangeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E06TableMatSortingChangeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
