import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio8Component } from './portfolio8.component';

describe('Portfolio8Component', () => {
  let component: Portfolio8Component;
  let fixture: ComponentFixture<Portfolio8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portfolio8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portfolio8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
