import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCreateComponent } from './line-create.component';

describe('LineCreateComponent', () => {
  let component: LineCreateComponent;
  let fixture: ComponentFixture<LineCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
