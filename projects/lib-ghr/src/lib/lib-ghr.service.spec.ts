import { TestBed } from '@angular/core/testing';

import { LibGhrService } from './lib-ghr.service';

describe('LibGhrService', () => {
  let service: LibGhrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibGhrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
