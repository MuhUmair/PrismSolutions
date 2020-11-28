import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudy3Component } from './case-study3.component';

describe('CaseStudy3Component', () => {
  let component: CaseStudy3Component;
  let fixture: ComponentFixture<CaseStudy3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStudy3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
