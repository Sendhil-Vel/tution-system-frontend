import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTokenPurchaseCountPages } from './monthly-token-purchase-count.pages';

describe('MonthlyTokenPurchaseCountPages', () => {
  let component: MonthlyTokenPurchaseCountPages;
  let fixture: ComponentFixture<MonthlyTokenPurchaseCountPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlyTokenPurchaseCountPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyTokenPurchaseCountPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
