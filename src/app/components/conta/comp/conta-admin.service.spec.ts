import { TestBed } from '@angular/core/testing';

import { ContaAdminService } from './conta-admin.service';

describe('ContaAdminService', () => {
  let service: ContaAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContaAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
