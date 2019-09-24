import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesAlumPage } from './actividades-alum.page';

describe('ActividadesAlumPage', () => {
  let component: ActividadesAlumPage;
  let fixture: ComponentFixture<ActividadesAlumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesAlumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesAlumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
