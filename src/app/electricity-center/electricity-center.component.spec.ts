import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityCenterComponent } from './electricity-center.component';

describe('ElectricityCenterComponent', () => {
  let component: ElectricityCenterComponent;
  let fixture: ComponentFixture<ElectricityCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricityCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
