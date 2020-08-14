import { TestBed } from '@angular/core/testing';

import { CartBehavourService } from './cart-behavour.service';

describe('CartBehavourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartBehavourService = TestBed.get(CartBehavourService);
    expect(service).toBeTruthy();
  });
});
