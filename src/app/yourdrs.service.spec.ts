import { TestBed } from '@angular/core/testing';

import { YourdrsService } from './yourdrs.service';

describe('YourdrsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YourdrsService = TestBed.get(YourdrsService);
    expect(service).toBeTruthy();
  });
});
