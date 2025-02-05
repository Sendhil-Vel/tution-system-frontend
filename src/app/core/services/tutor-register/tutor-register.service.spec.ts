import { TestBed } from '@angular/core/testing';

import { TutorRegisterService } from './tutor-register.service';

describe('TutorRegisterService', () => {
  let service: TutorRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
