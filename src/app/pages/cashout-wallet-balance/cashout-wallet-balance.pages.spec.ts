import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashoutWalletBalancePages } from './cashout-wallet-balance.pages';

describe('CashoutWalletBalancePages', () => {
  let component: CashoutWalletBalancePages;
  let fixture: ComponentFixture<CashoutWalletBalancePages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CashoutWalletBalancePages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashoutWalletBalancePages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
