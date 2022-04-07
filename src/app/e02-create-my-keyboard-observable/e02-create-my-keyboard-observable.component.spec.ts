import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E02CreateMyKeyboardObservableComponent } from './e02-create-my-keyboard-observable.component';

describe('E02CreateMyKeyboardObservableComponent', () => {
  let component: E02CreateMyKeyboardObservableComponent;
  let fixture: ComponentFixture<E02CreateMyKeyboardObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E02CreateMyKeyboardObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E02CreateMyKeyboardObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
