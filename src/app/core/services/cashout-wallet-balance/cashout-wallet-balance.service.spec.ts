import { TestBed } from '@angular/core/testing';

import { CashoutWalletBalanceService } from './cashout-wallet-balance.service';

describe('CashoutWalletBalanceService', () => {
  let service: CashoutWalletBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashoutWalletBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
