import { TestBed } from '@angular/core/testing';

import { ActiveUserCountService } from './active-user-count.service';

describe('ActiveUserCountService', () => {
  let service: ActiveUserCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveUserCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
