import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should test sub ', () => {
    expect(service.sub(5, 2)).toBe(3);
  });
  it('should be mul', () => {
    expect(service.mul(4, 5)).toBe(20);
  });
  it('should be div', () => {
    expect(service.div(40, 5)).toBe(8);
  });
});
