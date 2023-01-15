import { TestBed } from '@angular/core/testing';

import { ValidateHtokenGuard } from './validate-htoken.guard';

describe('ValidateHtokenGuard', () => {
  let guard: ValidateHtokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidateHtokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
