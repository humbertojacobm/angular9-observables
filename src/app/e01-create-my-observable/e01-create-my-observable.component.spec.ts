import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E01CreateMyObservableComponent } from './e01-create-my-observable.component';

describe('E01CreateMyObservableComponent', () => {
  let component: E01CreateMyObservableComponent;
  let fixture: ComponentFixture<E01CreateMyObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E01CreateMyObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E01CreateMyObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
