import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChangeComponent } from './customer-change.component';

describe('CustomerChangeComponent', () => {
  let component: CustomerChangeComponent;
  let fixture: ComponentFixture<CustomerChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
