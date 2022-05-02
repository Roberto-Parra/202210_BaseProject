/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { VehiculosService } from './vehiculos.service';

describe('Service: Vehiculos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiculosService]
    });
  });

  it('should ...', inject([VehiculosService], (service: VehiculosService) => {
    expect(service).toBeTruthy();
  }));
});
