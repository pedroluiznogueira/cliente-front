import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAdminLoginComponent } from './formulario-admin-login.component';

describe('FormularioAdminLoginComponent', () => {
  let component: FormularioAdminLoginComponent;
  let fixture: ComponentFixture<FormularioAdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAdminLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
