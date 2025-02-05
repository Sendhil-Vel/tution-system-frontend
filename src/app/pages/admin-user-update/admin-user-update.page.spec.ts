import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserUpdatePage } from './admin-user-update.page';

describe('AdminUserUpdatePage', () => {
  let component: AdminUserUpdatePage;
  let fixture: ComponentFixture<AdminUserUpdatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUserUpdatePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
