import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioServicoUpdateComponent } from './formulario-servico-update.component';

describe('FormularioServicoUpdateComponent', () => {
  let component: FormularioServicoUpdateComponent;
  let fixture: ComponentFixture<FormularioServicoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioServicoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioServicoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
