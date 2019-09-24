import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesAdminPage } from './actividades-admin.page';

describe('ActividadesAdminPage', () => {
  let component: ActividadesAdminPage;
  let fixture: ComponentFixture<ActividadesAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
