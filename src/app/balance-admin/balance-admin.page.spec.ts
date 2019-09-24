import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceAdminPage } from './balance-admin.page';

describe('BalanceAdminPage', () => {
  let component: BalanceAdminPage;
  let fixture: ComponentFixture<BalanceAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
