import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsModule } from './ships/ships.module';
import { MenuComponent } from './menu/menu.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, 
    ShipsModule,
    MenuComponent
  ], 
  exports: [
    MenuComponent,
    ShipsModule,
    ConfirmDialogComponent
  ]
})
export class ComponentsModule { }
