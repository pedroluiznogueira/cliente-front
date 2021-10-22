import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCursosUpdateComponent } from './formulario-cursos-update.component';

describe('FormularioCursosUpdateComponent', () => {
  let component: FormularioCursosUpdateComponent;
  let fixture: ComponentFixture<FormularioCursosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCursosUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCursosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
