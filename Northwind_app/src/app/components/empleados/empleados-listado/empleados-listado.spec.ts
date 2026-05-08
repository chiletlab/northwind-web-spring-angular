import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosListado } from './empleados-listado';

describe('EmpleadosListado', () => {
  let component: EmpleadosListado;
  let fixture: ComponentFixture<EmpleadosListado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosListado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosListado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
