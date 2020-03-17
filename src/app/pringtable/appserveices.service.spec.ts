import { TestBed } from '@angular/core/testing';

import { AppserveicesService } from './appserveices.service';

describe('AppserveicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppserveicesService = TestBed.get(AppserveicesService);
    expect(service).toBeTruthy();
  });
});
