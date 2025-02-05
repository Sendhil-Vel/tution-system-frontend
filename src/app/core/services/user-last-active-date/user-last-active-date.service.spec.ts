import { TestBed } from '@angular/core/testing';

import { UserLastActiveDateService } from './user-last-active-date.service';

describe('UserLastActiveDateService', () => {
  let service: UserLastActiveDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLastActiveDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
