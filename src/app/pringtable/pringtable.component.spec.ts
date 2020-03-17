import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PringtableComponent } from './pringtable.component';

describe('PringtableComponent', () => {
  let component: PringtableComponent;
  let fixture: ComponentFixture<PringtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PringtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PringtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
