import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E01ExampleComponent } from './e01-example.component';

describe('E01ExampleComponent', () => {
  let component: E01ExampleComponent;
  let fixture: ComponentFixture<E01ExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E01ExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E01ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
