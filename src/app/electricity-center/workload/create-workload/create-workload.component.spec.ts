import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkloadComponent } from './create-workload.component';

describe('CreateWorkloadComponent', () => {
  let component: CreateWorkloadComponent;
  let fixture: ComponentFixture<CreateWorkloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWorkloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
