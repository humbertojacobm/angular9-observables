import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E01ReactiveFormsComponent } from './e01-reactive-forms.component';

describe('E01ReactiveFormsComponent', () => {
  let component: E01ReactiveFormsComponent;
  let fixture: ComponentFixture<E01ReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E01ReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E01ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
