import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomcardComponent } from './randomcard.component';

describe('RandomcardComponent', () => {
  let component: RandomcardComponent;
  let fixture: ComponentFixture<RandomcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
