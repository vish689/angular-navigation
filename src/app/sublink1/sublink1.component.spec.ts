import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sublink1Component } from './sublink1.component';

describe('Sublink1Component', () => {
  let component: Sublink1Component;
  let fixture: ComponentFixture<Sublink1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sublink1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sublink1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
