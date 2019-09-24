import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesAdminPage } from './planes-admin.page';

describe('PlanesAdminPage', () => {
  let component: PlanesAdminPage;
  let fixture: ComponentFixture<PlanesAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanesAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
