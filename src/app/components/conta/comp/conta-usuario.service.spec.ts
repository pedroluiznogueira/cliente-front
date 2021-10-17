import { TestBed } from '@angular/core/testing';

import { ContaUsuarioService } from './conta-usuario.service';

describe('ContaUsuarioService', () => {
  let service: ContaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
