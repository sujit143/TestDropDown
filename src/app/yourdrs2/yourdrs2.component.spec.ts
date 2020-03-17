import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Yourdrs2Component } from './yourdrs2.component';

describe('Yourdrs2Component', () => {
  let component: Yourdrs2Component;
  let fixture: ComponentFixture<Yourdrs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Yourdrs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Yourdrs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
