import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E01FirebaseComponent } from './e01-firebase.component';

describe('E01FirebaseComponent', () => {
  let component: E01FirebaseComponent;
  let fixture: ComponentFixture<E01FirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E01FirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E01FirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
