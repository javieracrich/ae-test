import { TestBed, inject } from '@angular/core/testing';

import { SynonymService } from './synonym.service';

describe('SynonymServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SynonymService]
    });
  });

  it('should be created', inject([SynonymService], (service: SynonymService) => {
    expect(service).toBeTruthy();
  }));
});
