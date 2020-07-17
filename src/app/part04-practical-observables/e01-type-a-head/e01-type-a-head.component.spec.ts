import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E01TypeAHeadComponent } from './e01-type-a-head.component';

describe('E01TypeAHeadComponent', () => {
  let component: E01TypeAHeadComponent;
  let fixture: ComponentFixture<E01TypeAHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E01TypeAHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E01TypeAHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
