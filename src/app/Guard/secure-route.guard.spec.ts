import { TestBed, async, inject } from '@angular/core/testing';

import { SecureRouteGuard } from './secure-route.guard';
import {RouterTestingModule} from '@angular/router/testing';

describe('SecureRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureRouteGuard],
      imports: [RouterTestingModule]
    });
  });

  it('should ...', inject([SecureRouteGuard], (guard: SecureRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
