import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAdminPage } from './plan-admin.page';

describe('PlanAdminPage', () => {
  let component: PlanAdminPage;
  let fixture: ComponentFixture<PlanAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
