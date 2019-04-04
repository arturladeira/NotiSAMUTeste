import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoPage } from './aviso.page';

describe('AvisoPage', () => {
  let component: AvisoPage;
  let fixture: ComponentFixture<AvisoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
