import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDataHoraPage } from './registro-data-hora.page';

describe('RegistroDataHoraPage', () => {
  let component: RegistroDataHoraPage;
  let fixture: ComponentFixture<RegistroDataHoraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDataHoraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDataHoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
