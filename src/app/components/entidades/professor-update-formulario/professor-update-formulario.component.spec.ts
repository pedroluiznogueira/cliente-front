import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorUpdateFormularioComponent } from './professor-update-formulario.component';

describe('ProfessorUpdateFormularioComponent', () => {
  let component: ProfessorUpdateFormularioComponent;
  let fixture: ComponentFixture<ProfessorUpdateFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorUpdateFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorUpdateFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
