import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { ShipService } from '../../../services/ship.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Ship } from '../../../../../models/Ship.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { ShipFormComponent } from '../../ship-form/ship-form.component';

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

  constructor(
    private shipService: ShipService,
    public dialog: MatDialog
  ) {}

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
    this.loadShips();
  }

  newShip() {
    const dialogRef = this.dialog.open(ShipFormComponent, {
      width: '400px',
      data: { isEditMode: false }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.loadShips();
    });
  }
  
  updateShip(ship: Ship) {
    const dialogRef = this.dialog.open(ShipFormComponent, {
      width: '400px',
      data: { isEditMode: true, id: ship.id }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.loadShips();
    });
  }

  deleteShip(ship: Ship): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.shipService.deleteShip(ship.id).subscribe(() => {
          this.loadShips();
        });
      }
    });
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: Ship, filter: string) => {
      return data.id.toString().includes(filter) || data.name.toLowerCase().includes(filter);
    }
  }
}
