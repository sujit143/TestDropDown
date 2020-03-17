import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectmenuComponent } from './contectmenu.component';

describe('ContectmenuComponent', () => {
  let component: ContectmenuComponent;
  let fixture: ComponentFixture<ContectmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContectmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContectmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
