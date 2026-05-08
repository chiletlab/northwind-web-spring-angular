import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosEdit } from './productos-edit';

describe('ProductosEdit', () => {
  let component: ProductosEdit;
  let fixture: ComponentFixture<ProductosEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
