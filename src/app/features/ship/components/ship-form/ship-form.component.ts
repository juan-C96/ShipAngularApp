import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ShipService } from '../../services/ship.service';
import { Ship } from '../../../../models/Ship.model';

@Component({
  selector: 'app-ship-form',
  templateUrl: './ship-form.component.html',
  styleUrl: './ship-form.component.css'
})
export class ShipFormComponent implements OnInit {

  shipForm!: FormGroup;
  isEditMode: boolean = false; 
  currentShipId: number | null = null;

  constructor(
    private fb: FormBuilder, 
    private shipService: ShipService,
    public dialogRef: MatDialogRef<ShipFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { isEditMode: boolean; id?: number }
  ) {
    this.shipForm = this.fb.group({
      name: ['', Validators.required],
      speed: ['', Validators.required],
      fuelCapacity: ['', Validators.required],
      cargoCapacity: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.isEditMode = this.data.isEditMode; 
    this.currentShipId = this.data.id || null;

    if (this.isEditMode && this.currentShipId) {
      this.loadShip(this.currentShipId);
    }
  }

  loadShip(id: number) {
   this.shipService.getShipById(id).subscribe((ship: Ship) => {
      this.shipForm.patchValue(ship);
    }); 
  }

  onSubmit() {
     if (this.shipForm.valid) {
      if (this.isEditMode) {
        this.shipService.updateShip(this.currentShipId!, this.shipForm.value).subscribe(() => {
          this.dialogRef.close(true); 
        });
      } else {
        this.shipService.createShip(this.shipForm.value).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    } 
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
