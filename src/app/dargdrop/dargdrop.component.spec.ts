import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DargdropComponent } from './dargdrop.component';

describe('DargdropComponent', () => {
  let component: DargdropComponent;
  let fixture: ComponentFixture<DargdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DargdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DargdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
