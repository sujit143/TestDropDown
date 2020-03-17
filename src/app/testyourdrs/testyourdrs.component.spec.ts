import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestyourdrsComponent } from './testyourdrs.component';

describe('TestyourdrsComponent', () => {
  let component: TestyourdrsComponent;
  let fixture: ComponentFixture<TestyourdrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestyourdrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestyourdrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
