import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E01FirstMaterialComponent } from './e01-first-material.component';

describe('E01FirstMaterialComponent', () => {
  let component: E01FirstMaterialComponent;
  let fixture: ComponentFixture<E01FirstMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E01FirstMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E01FirstMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
