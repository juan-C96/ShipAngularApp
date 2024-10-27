import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsModule } from './ships/ships.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShipsModule,
    MenuComponent
  ], 
  exports: [
    MenuComponent,
    ShipsModule
  ]
})
export class ComponentsModule { }
