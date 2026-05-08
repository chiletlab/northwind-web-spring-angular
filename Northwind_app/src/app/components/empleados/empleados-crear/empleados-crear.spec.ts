import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosCrear } from './empleados-crear';

describe('EmpleadosCrear', () => {
  let component: EmpleadosCrear;
  let fixture: ComponentFixture<EmpleadosCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosCrear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
