import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E01ObservableFromPromiseComponent } from './e01-observable-from-promise.component';

describe('E01ObservableFromPromiseComponent', () => {
  let component: E01ObservableFromPromiseComponent;
  let fixture: ComponentFixture<E01ObservableFromPromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E01ObservableFromPromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E01ObservableFromPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
