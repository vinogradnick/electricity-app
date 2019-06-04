import { TestBed } from '@angular/core/testing';

import { WorkloadServiceService } from './workload-service.service';

describe('WorkloadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkloadServiceService = TestBed.get(WorkloadServiceService);
    expect(service).toBeTruthy();
  });
});
