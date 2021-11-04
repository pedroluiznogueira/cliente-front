import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosPlataformaComponent } from './cursos-plataforma.component';

describe('CursosPlataformaComponent', () => {
  let component: CursosPlataformaComponent;
  let fixture: ComponentFixture<CursosPlataformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosPlataformaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
