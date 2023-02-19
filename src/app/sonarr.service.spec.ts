/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SonarrService } from './sonarr.service';

describe('Service: SonarrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SonarrService]
    });
  });

  it('should ...', inject([SonarrService], (service: SonarrService) => {
    expect(service).toBeTruthy();
  }));

  it('should have an X-Api-Key header', inject([SonarrService], (service: SonarrService) => {
    expect(service.getSeries()).toBeTruthy();
  }));
});
