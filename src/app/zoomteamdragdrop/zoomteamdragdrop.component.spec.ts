import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomteamdragdropComponent } from './zoomteamdragdrop.component';

describe('ZoomteamdragdropComponent', () => {
  let component: ZoomteamdragdropComponent;
  let fixture: ComponentFixture<ZoomteamdragdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomteamdragdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomteamdragdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
