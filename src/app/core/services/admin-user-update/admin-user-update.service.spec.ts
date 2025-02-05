import { TestBed } from '@angular/core/testing';

import { AdminUserUpdateService } from './admin-user-update.service';

describe('AdminUserUpdateService', () => {
  let service: AdminUserUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminUserUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
