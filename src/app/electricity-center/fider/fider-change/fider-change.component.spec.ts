import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiderChangeComponent } from './fider-change.component';

describe('FiderChangeComponent', () => {
  let component: FiderChangeComponent;
  let fixture: ComponentFixture<FiderChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiderChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiderChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
