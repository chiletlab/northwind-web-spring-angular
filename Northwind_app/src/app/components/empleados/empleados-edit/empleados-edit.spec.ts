import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosEdit } from './empleados-edit';

describe('EmpleadosEdit', () => {
  let component: EmpleadosEdit;
  let fixture: ComponentFixture<EmpleadosEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
