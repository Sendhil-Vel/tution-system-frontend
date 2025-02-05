import { TestBed } from '@angular/core/testing';

import { UpdateIsactiveService } from './update-isactive.service';

describe('UpdateIsactiveService', () => {
  let service: UpdateIsactiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateIsactiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
