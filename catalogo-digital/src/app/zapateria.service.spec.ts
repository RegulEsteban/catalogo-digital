import { TestBed } from '@angular/core/testing';

import { ZapateriaService } from './zapateria.service';

describe('ZapateriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZapateriaService = TestBed.get(ZapateriaService);
    expect(service).toBeTruthy();
  });
});
