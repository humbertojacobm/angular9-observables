import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E04MulticastingTechniqueTrueVersionComponent } from './e04-multicasting-technique-true-version.component';

describe('E04MulticastingTechniqueTrueVersionComponent', () => {
  let component: E04MulticastingTechniqueTrueVersionComponent;
  let fixture: ComponentFixture<E04MulticastingTechniqueTrueVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E04MulticastingTechniqueTrueVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E04MulticastingTechniqueTrueVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
