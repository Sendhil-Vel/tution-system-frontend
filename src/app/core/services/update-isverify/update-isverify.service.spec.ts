import { TestBed } from '@angular/core/testing';

import { UpdateIsverifyService } from './update-isverify.service';

describe('UpdateIsverifyService', () => {
  let service: UpdateIsverifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateIsverifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
