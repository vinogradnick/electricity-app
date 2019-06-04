import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpChangeComponent } from './tp-change.component';

describe('TpChangeComponent', () => {
  let component: TpChangeComponent;
  let fixture: ComponentFixture<TpChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
