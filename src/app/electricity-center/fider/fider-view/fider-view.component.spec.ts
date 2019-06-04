import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiderViewComponent } from './fider-view.component';

describe('FiderViewComponent', () => {
  let component: FiderViewComponent;
  let fixture: ComponentFixture<FiderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
