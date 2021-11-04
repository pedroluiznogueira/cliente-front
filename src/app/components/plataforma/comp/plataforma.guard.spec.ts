import { TestBed } from '@angular/core/testing';

import { PlataformaGuard } from './plataforma.guard';

describe('PlataformaGuard', () => {
  let guard: PlataformaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PlataformaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
