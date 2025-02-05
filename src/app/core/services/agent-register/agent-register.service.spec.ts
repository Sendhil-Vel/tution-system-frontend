import { TestBed } from '@angular/core/testing';

import { AgentRegisterService } from './agent-register.service';

describe('AgentRegisterService', () => {
  let service: AgentRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
