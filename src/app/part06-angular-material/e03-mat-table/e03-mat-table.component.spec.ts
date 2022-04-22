import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E03MatTableComponent } from './e03-mat-table.component';

describe('E03MatTableComponent', () => {
  let component: E03MatTableComponent;
  let fixture: ComponentFixture<E03MatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E03MatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E03MatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
