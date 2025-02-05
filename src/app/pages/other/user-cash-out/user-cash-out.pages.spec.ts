import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCashOutPages } from './user-cash-out.pages';

describe('UserCashOutPages', () => {
  let component: UserCashOutPages;
  let fixture: ComponentFixture<UserCashOutPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCashOutPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCashOutPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
