/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SonarrServiceService } from './sonarr-service.service';

describe('Service: SonarrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SonarrServiceService]
    });
  });

  it('should ...', inject([SonarrServiceService], (service: SonarrServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('should have an X-Api-Key header', inject([SonarrServiceService], (service: SonarrServiceService) => {
    expect(service.getSeries()).toBeTruthy();
  }));
});
