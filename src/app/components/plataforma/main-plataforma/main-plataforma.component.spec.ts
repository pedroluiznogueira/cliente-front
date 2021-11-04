import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlataformaComponent } from './main-plataforma.component';

describe('MainPlataformaComponent', () => {
  let component: MainPlataformaComponent;
  let fixture: ComponentFixture<MainPlataformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPlataformaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
