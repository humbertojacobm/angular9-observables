import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E02MattabComponent } from './e02-mattab.component';

describe('E02MattabComponent', () => {
  let component: E02MattabComponent;
  let fixture: ComponentFixture<E02MattabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E02MattabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E02MattabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
