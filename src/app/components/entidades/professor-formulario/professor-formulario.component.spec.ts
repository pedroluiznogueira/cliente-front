import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorFormularioComponent } from './professor-formulario.component';

describe('ProfessorFormularioComponent', () => {
  let component: ProfessorFormularioComponent;
  let fixture: ComponentFixture<ProfessorFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
