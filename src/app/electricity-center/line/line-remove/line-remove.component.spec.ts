import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineRemoveComponent } from './line-remove.component';

describe('LineRemoveComponent', () => {
  let component: LineRemoveComponent;
  let fixture: ComponentFixture<LineRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
