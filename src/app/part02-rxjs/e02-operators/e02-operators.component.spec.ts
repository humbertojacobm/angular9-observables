import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E02OperatorsComponent } from './e02-operators.component';

describe('E02OperatorsComponent', () => {
  let component: E02OperatorsComponent;
  let fixture: ComponentFixture<E02OperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E02OperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E02OperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
