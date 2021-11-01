import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsineConoscoComponent } from './ensine-conosco.component';

describe('EnsineConoscoComponent', () => {
  let component: EnsineConoscoComponent;
  let fixture: ComponentFixture<EnsineConoscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnsineConoscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsineConoscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
