import { TestBed } from '@angular/core/testing';

import { ElectricityAuthService } from './electricity-auth.service';

describe('ElectricityAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectricityAuthService = TestBed.get(ElectricityAuthService);
    expect(service).toBeTruthy();
  });
});
