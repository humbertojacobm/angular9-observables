import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E03ErrorHandlingComponent } from './e03-error-handling.component';

describe('E03ErrorHandlingComponent', () => {
  let component: E03ErrorHandlingComponent;
  let fixture: ComponentFixture<E03ErrorHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E03ErrorHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E03ErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
