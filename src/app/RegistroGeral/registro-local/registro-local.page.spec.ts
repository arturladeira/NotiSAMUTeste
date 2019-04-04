import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLocalPage } from './registro-local.page';

describe('RegistroLocalPage', () => {
  let component: RegistroLocalPage;
  let fixture: ComponentFixture<RegistroLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroLocalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
