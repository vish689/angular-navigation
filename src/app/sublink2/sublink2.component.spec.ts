import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sublink2Component } from './sublink2.component';

describe('Sublink2Component', () => {
  let component: Sublink2Component;
  let fixture: ComponentFixture<Sublink2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sublink2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sublink2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
