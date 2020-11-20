import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio7Component } from './portfolio7.component';

describe('Portfolio7Component', () => {
  let component: Portfolio7Component;
  let fixture: ComponentFixture<Portfolio7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portfolio7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portfolio7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
