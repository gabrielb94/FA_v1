import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesProfPage } from './actividades-prof.page';

describe('ActividadesProfPage', () => {
  let component: ActividadesProfPage;
  let fixture: ComponentFixture<ActividadesProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesProfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
