import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E02BackoffComponent } from './e02-backoff.component';

describe('E02BackoffComponent', () => {
  let component: E02BackoffComponent;
  let fixture: ComponentFixture<E02BackoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E02BackoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E02BackoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
