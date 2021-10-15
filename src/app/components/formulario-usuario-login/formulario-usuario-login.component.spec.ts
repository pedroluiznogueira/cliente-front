import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUsuarioLoginComponent } from './formulario-usuario-login.component';

describe('FormularioUsuarioLoginComponent', () => {
  let component: FormularioUsuarioLoginComponent;
  let fixture: ComponentFixture<FormularioUsuarioLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioUsuarioLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioUsuarioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
