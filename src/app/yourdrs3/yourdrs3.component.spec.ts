import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Yourdrs3Component } from './yourdrs3.component';

describe('Yourdrs3Component', () => {
  let component: Yourdrs3Component;
  let fixture: ComponentFixture<Yourdrs3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Yourdrs3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Yourdrs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
