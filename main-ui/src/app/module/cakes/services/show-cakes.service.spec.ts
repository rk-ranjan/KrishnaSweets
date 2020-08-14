import { TestBed } from '@angular/core/testing';

import { ShowCakesService } from './show-cakes.service';

describe('ShowCakesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowCakesService = TestBed.get(ShowCakesService);
    expect(service).toBeTruthy();
  });
});
