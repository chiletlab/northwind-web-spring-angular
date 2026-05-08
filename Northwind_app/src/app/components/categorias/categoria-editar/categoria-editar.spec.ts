import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaEditar } from './categoria-editar';

describe('CategoriaEditar', () => {
  let component: CategoriaEditar;
  let fixture: ComponentFixture<CategoriaEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaEditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
