import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionandoModulosComponent } from './adicionando-modulos.component';

describe('AdicionandoModulosComponent', () => {
  let component: AdicionandoModulosComponent;
  let fixture: ComponentFixture<AdicionandoModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionandoModulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionandoModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
