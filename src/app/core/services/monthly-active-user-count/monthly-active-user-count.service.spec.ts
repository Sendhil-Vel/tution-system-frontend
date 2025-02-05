import { TestBed } from '@angular/core/testing';

import { MonthlyActiveUserCountService } from './monthly-active-user-count.service';

describe('MonthlyActiveUserCountService', () => {
  let service: MonthlyActiveUserCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlyActiveUserCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
