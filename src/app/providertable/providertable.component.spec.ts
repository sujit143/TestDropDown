import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidertableComponent } from './providertable.component';

describe('ProvidertableComponent', () => {
  let component: ProvidertableComponent;
  let fixture: ComponentFixture<ProvidertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
