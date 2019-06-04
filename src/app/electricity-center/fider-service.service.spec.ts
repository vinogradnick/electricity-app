import { TestBed } from '@angular/core/testing';

import { FiderServiceService } from './fider-service.service';

describe('FiderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiderServiceService = TestBed.get(FiderServiceService);
    expect(service).toBeTruthy();
  });
});
