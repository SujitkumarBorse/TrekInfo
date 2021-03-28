import { TestBed } from '@angular/core/testing';

import { FortService } from './fort.service';

describe('FortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FortService = TestBed.get(FortService);
    expect(service).toBeTruthy();
  });
});
