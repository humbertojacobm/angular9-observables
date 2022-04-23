import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E07TableFilterSearchComponent } from './e07-table-filter-search.component';

describe('E07TableFilterSearchComponent', () => {
  let component: E07TableFilterSearchComponent;
  let fixture: ComponentFixture<E07TableFilterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E07TableFilterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E07TableFilterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
