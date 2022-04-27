import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E02FilterFirebaseComponent } from './e02-filter-firebase.component';

describe('E02FilterFirebaseComponent', () => {
  let component: E02FilterFirebaseComponent;
  let fixture: ComponentFixture<E02FilterFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E02FilterFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E02FilterFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
