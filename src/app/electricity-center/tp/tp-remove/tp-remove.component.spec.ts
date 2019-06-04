import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpRemoveComponent } from './tp-remove.component';

describe('TpRemoveComponent', () => {
  let component: TpRemoveComponent;
  let fixture: ComponentFixture<TpRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
