import { TestBed } from '@angular/core/testing';

import { SectionServiceService } from './section-service.service';

describe('SectionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectionServiceService = TestBed.get(SectionServiceService);
    expect(service).toBeTruthy();
  });
});
