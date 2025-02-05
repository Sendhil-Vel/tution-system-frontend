import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLastActiveDatePages } from './user-last-active-date.pages';

describe('UserLastActiveDatePages', () => {
  let component: UserLastActiveDatePages;
  let fixture: ComponentFixture<UserLastActiveDatePages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserLastActiveDatePages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLastActiveDatePages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
