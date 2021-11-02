import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoCursoComponent } from './conteudo-curso.component';

describe('ConteudoCursoComponent', () => {
  let component: ConteudoCursoComponent;
  let fixture: ComponentFixture<ConteudoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
