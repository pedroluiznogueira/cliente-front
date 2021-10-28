import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoAprendizadoComponent } from './curso-aprendizado.component';

describe('CursoAprendizadoComponent', () => {
  let component: CursoAprendizadoComponent;
  let fixture: ComponentFixture<CursoAprendizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoAprendizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoAprendizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
