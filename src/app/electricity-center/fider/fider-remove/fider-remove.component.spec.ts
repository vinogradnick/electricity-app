import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiderRemoveComponent } from './fider-remove.component';

describe('FiderRemoveComponent', () => {
  let component: FiderRemoveComponent;
  let fixture: ComponentFixture<FiderRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiderRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiderRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
