import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiderCreateComponent } from './fider-create.component';

describe('FiderCreateComponent', () => {
  let component: FiderCreateComponent;
  let fixture: ComponentFixture<FiderCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiderCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
