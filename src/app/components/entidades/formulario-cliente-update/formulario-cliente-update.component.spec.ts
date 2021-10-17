import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioClienteUpdateComponent } from './formulario-cliente-update.component';

describe('FormularioClienteUpdateComponent', () => {
  let component: FormularioClienteUpdateComponent;
  let fixture: ComponentFixture<FormularioClienteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioClienteUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioClienteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
