import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlataformaComponent } from './home-plataforma.component';

describe('HomePlataformaComponent', () => {
  let component: HomePlataformaComponent;
  let fixture: ComponentFixture<HomePlataformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePlataformaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
