import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDonationsPage } from './daily-donations.page';

describe('DailyDonationsPage', () => {
  let component: DailyDonationsPage;
  let fixture: ComponentFixture<DailyDonationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyDonationsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyDonationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
