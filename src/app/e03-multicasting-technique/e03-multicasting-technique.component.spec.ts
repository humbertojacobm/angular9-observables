import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E03MulticastingTechniqueComponent } from './e03-multicasting-technique.component';

describe('E03MulticastingTechniqueComponent', () => {
  let component: E03MulticastingTechniqueComponent;
  let fixture: ComponentFixture<E03MulticastingTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E03MulticastingTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E03MulticastingTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
