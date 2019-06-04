import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityReviewComponent } from './electricity-review.component';

describe('ElectricityReviewComponent', () => {
  let component: ElectricityReviewComponent;
  let fixture: ComponentFixture<ElectricityReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricityReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
