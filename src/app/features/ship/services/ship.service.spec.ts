import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Ship } from '../../../models/Ship.model';

import { ShipService } from './ship.service';

describe('ShipService', () => {
  let service: ShipService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShipService],
    });
    service = TestBed.inject(ShipService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  
it('should fetch all ships', () => {
  const mockShips: Ship[] = [
    { id: 1, name: 'Ship 1', speed: 20,  fuelCapacity: 100, cargoCapacity: 200 },
    { id: 2, name: 'Ship 2', speed: 26, fuelCapacity: 150, cargoCapacity: 250 },
  ];

  service.getShips().subscribe(ships => {
    expect(ships.length).toBe(2);
    expect(ships).toEqual(mockShips);
  });

  const req = httpMock.expectOne('http://localhost:8080/api/ships');
  expect(req.request.method).toBe('GET');
  req.flush(mockShips);
});
});


