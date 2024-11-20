/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ConferenciasService } from './conferencias.service';
import { Conferencias } from './conferencias';

describe('Service: Conferencias.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConferenciasService]
    });
  });

  it('should ...', inject([ConferenciasService], (service: ConferenciasService) => {
    expect(service).toBeTruthy();
  }));
});
