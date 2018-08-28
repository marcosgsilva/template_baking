import { TestBed, inject } from '@angular/core/testing';

import { AppHttpService } from './app-http.service';

describe('AppHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppHttpserviceService]
    });
  });

  it('should be created', inject([AppHttpserviceService], (service: AppHttpserviceService) => {
    expect(service).toBeTruthy();
  }));
});
