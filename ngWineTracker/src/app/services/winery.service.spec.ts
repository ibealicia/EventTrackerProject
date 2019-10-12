import { TestBed } from '@angular/core/testing';

import { WineryService } from './winery.service';

describe('WineryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WineryService = TestBed.get(WineryService);
    expect(service).toBeTruthy();
  });
});
