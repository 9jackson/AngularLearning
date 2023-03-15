import { TestBed } from '@angular/core/testing';

import { AuthenticationInterceptor } from './authentic./authentication.interceptor

describe('AuthenticationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthenticationInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthenticationInterceptor = TestBed.inject(AuthenticationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
