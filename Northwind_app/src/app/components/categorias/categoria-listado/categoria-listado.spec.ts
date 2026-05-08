import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaListado } from './categoria-listado';

describe('CategoriaListado', () => {
  let component: CategoriaListado;
  let fixture: ComponentFixture<CategoriaListado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaListado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaListado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
