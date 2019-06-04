import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiderComponent } from './fider.component';

describe('FiderComponent', () => {
  let component: FiderComponent;
  let fixture: ComponentFixture<FiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
