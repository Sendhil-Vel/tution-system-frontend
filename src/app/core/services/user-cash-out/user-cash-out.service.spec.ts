import { TestBed } from '@angular/core/testing';

import { UserCashOutService } from './user-cash-out.service';

describe('UserCashOutService', () => {
  let service: UserCashOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCashOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
