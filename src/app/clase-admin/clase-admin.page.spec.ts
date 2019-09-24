import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseAdminPage } from './clase-admin.page';

describe('ClaseAdminPage', () => {
  let component: ClaseAdminPage;
  let fixture: ComponentFixture<ClaseAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
