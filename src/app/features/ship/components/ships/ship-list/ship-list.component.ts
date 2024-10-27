import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { ShipService } from '../../../services/ship.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Ship } from '../../../../../models/ship.model';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrl: './ship-list.component.css'
})
export class ShipListComponent implements OnInit, AfterViewInit {
  ships: Ship[] = [];
  displayedColumns: string[] = ['id', 'name', 'speed', 'fuelCapacity', 'cargoCapacity'];
  dataSource = new MatTableDataSource<Ship>(this.ships);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private shipService: ShipService) {}

  ngOnInit(): void {
    this.loadShips();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadShips(): void {
    this.shipService.getShips().subscribe(
      (data: Ship[]) => {
        this.ships = data;
        this.dataSource.data = this.ships; 
        this.dataSource.paginator = this.paginator; 
      },
      (error) => {
        console.error('Error fetching ships:', error);
      }
    );
  }

  loader() {
    console.log(this.ships)
  }

  updateShip(element: any) {

  }

  deleteShip(element: any) {

  }
}
