import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaleConoscoAppComponent } from './fale-conosco-app.component';

describe('FaleConoscoAppComponent', () => {
  let component: FaleConoscoAppComponent;
  let fixture: ComponentFixture<FaleConoscoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaleConoscoAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaleConoscoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
