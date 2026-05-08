import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorRegistrar } from './proveedor-registrar';

describe('ProveedorRegistrar', () => {
  let component: ProveedorRegistrar;
  let fixture: ComponentFixture<ProveedorRegistrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedorRegistrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedorRegistrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
