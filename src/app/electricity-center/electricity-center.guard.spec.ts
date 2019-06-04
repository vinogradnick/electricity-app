import { TestBed, async, inject } from '@angular/core/testing';

import { ElectricityCenterGuard } from './electricity-center.guard';

describe('ElectricityCenterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectricityCenterGuard]
    });
  });

  it('should ...', inject([ElectricityCenterGuard], (guard: ElectricityCenterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
