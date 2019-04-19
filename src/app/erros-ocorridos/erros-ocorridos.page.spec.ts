import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrosOcorridosPage } from './erros-ocorridos.page';

describe('ErrosOcorridosPage', () => {
  let component: ErrosOcorridosPage;
  let fixture: ComponentFixture<ErrosOcorridosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrosOcorridosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrosOcorridosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
