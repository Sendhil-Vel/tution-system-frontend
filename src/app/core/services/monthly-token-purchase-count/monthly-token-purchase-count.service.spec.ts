import { TestBed } from '@angular/core/testing';

import { MonthlyTokenPurchaseCountService } from './monthly-token-purchase-count.service';

describe('MonthlyTokenPurchaseCountService', () => {
  let service: MonthlyTokenPurchaseCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlyTokenPurchaseCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
