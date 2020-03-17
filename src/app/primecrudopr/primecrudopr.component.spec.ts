import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimecrudoprComponent } from './primecrudopr.component';

describe('PrimecrudoprComponent', () => {
  let component: PrimecrudoprComponent;
  let fixture: ComponentFixture<PrimecrudoprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimecrudoprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimecrudoprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
