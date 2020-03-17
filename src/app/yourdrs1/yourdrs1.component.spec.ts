import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Yourdrs1Component } from './yourdrs1.component';

describe('Yourdrs1Component', () => {
  let component: Yourdrs1Component;
  let fixture: ComponentFixture<Yourdrs1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Yourdrs1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Yourdrs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
