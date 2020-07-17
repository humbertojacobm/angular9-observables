import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E01AsyncPipeComponent } from './e01-async-pipe.component';

describe('E01AsyncPipeComponent', () => {
  let component: E01AsyncPipeComponent;
  let fixture: ComponentFixture<E01AsyncPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E01AsyncPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E01AsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
