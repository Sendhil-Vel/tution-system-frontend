import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubscriptionInfoPages } from './user-subscription-info.pages';

describe('UserSubscriptionInfoPages', () => {
  let component: UserSubscriptionInfoPages;
  let fixture: ComponentFixture<UserSubscriptionInfoPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSubscriptionInfoPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSubscriptionInfoPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
