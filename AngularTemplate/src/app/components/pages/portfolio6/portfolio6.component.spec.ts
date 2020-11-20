import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio6Component } from './portfolio6.component';

describe('Portfolio6Component', () => {
  let component: Portfolio6Component;
  let fixture: ComponentFixture<Portfolio6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portfolio6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portfolio6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
