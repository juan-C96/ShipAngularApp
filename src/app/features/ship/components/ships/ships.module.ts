import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';

import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipService } from '../../services/ship.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TitleCasePipe } from '../../../../pipes/title-case.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ShipListComponent,
  ],
  imports: [
    CommonModule,
    MatPaginator,
    MatTableModule,
    MatButtonModule, 
    MatMenuModule, 
    MatIconModule,
    HttpClientModule,
    TitleCasePipe
  ],
  exports: [
    ShipListComponent
  ],
  providers: [ShipService],
})
export class ShipsModule { }
