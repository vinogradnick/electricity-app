import { TestBed } from '@angular/core/testing';

import { TpServiceService } from './tp-service.service';

describe('TpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TpServiceService = TestBed.get(TpServiceService);
    expect(service).toBeTruthy();
  });
});
