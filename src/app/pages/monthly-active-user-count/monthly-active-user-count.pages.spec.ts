import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyActiveUserCountPages } from './monthly-active-user-count.pages';

describe('MonthlyActiveUserCountPages', () => {
  let component: MonthlyActiveUserCountPages;
  let fixture: ComponentFixture<MonthlyActiveUserCountPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlyActiveUserCountPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyActiveUserCountPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
