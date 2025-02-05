import { TestBed } from '@angular/core/testing';

import { AdminListingsService } from './admin-listings.service';

describe('AdminListingsService', () => {
  let service: AdminListingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminListingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
