import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio5Component } from './portfolio5.component';

describe('Portfolio5Component', () => {
  let component: Portfolio5Component;
  let fixture: ComponentFixture<Portfolio5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portfolio5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portfolio5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
