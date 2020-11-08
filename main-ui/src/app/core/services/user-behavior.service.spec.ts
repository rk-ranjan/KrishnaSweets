import { TestBed } from '@angular/core/testing';

import { UserBehaviorService } from './user-behavior.service';

describe('UserBehaviorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserBehaviorService = TestBed.get(UserBehaviorService);
    expect(service).toBeTruthy();
  });
});
