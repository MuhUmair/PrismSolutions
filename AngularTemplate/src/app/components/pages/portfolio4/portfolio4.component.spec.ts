import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio4Component } from './portfolio4.component';

describe('Portfolio4Component', () => {
  let component: Portfolio4Component;
  let fixture: ComponentFixture<Portfolio4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portfolio4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portfolio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
