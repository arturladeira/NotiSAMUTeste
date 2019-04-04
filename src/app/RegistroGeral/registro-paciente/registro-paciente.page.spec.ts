import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPacientePage } from './registro-paciente.page';

describe('RegistroPacientePage', () => {
  let component: RegistroPacientePage;
  let fixture: ComponentFixture<RegistroPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
