import { TestBed } from '@angular/core/testing';

import { AfrilangueService } from './afrilangue.service';

describe('AfrilangueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfrilangueService = TestBed.get(AfrilangueService);
    expect(service).toBeTruthy();
  });
});
