import { TestBed } from '@angular/core/testing';

import { AgentListingsService } from './agent-listings.service';

describe('AgentListingsService', () => {
  let service: AgentListingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentListingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
