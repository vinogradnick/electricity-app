import { TestBed } from '@angular/core/testing';

import { ElectricityService } from './electricity.service';

describe('ElectricityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectricityService<number> = TestBed.get(ElectricityService);
    expect(service).toBeTruthy();
  });
});
