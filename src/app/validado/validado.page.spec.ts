import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadoPage } from './validado.page';

describe('ValidadoPage', () => {
  let component: ValidadoPage;
  let fixture: ComponentFixture<ValidadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
