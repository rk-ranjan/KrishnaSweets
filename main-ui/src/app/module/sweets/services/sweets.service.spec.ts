import { TestBed } from '@angular/core/testing';

import { SweetsService } from './sweets.service';

describe('SweetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SweetsService = TestBed.get(SweetsService);
    expect(service).toBeTruthy();
  });
});
