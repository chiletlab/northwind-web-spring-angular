import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaRegistrar } from './categoria-registrar';

describe('CategoriaRegistrar', () => {
  let component: CategoriaRegistrar;
  let fixture: ComponentFixture<CategoriaRegistrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaRegistrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaRegistrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
