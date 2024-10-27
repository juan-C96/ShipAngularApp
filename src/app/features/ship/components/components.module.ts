import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsModule } from './ships/ships.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ShipService } from '../services/ship.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ShipFormComponent } from './ship-form/ship-form.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    ShipFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule, 
    ShipsModule
  ], 
  exports: [
    ConfirmDialogComponent,
    ShipFormComponent
  ],
  providers: [
    ShipService
  ]
})
export class ComponentsModule { }
