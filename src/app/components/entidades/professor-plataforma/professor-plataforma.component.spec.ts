import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorPlataformaComponent } from './professor-plataforma.component';

describe('ProfessorPlataformaComponent', () => {
  let component: ProfessorPlataformaComponent;
  let fixture: ComponentFixture<ProfessorPlataformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorPlataformaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
