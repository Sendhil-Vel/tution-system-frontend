import { TestBed } from '@angular/core/testing';

import { UserSubscriptionInfoService } from './user-subscription-info.service';

describe('UserSubscriptionInfoService', () => {
  let service: UserSubscriptionInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSubscriptionInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
