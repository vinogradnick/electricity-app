import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestConstructorComponent } from './request-constructor.component';

describe('RequestConstructorComponent', () => {
  let component: RequestConstructorComponent;
  let fixture: ComponentFixture<RequestConstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestConstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
