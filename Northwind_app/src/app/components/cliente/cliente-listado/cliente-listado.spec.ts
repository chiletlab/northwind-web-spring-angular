import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListado } from './cliente-listado';

describe('ClienteListado', () => {
  let component: ClienteListado;
  let fixture: ComponentFixture<ClienteListado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteListado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteListado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
