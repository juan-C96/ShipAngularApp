import { Component, EventEmitter, Output } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MENU_OPTIONS } from '../../../../models/menu-options';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  options = MENU_OPTIONS;
  @Output() optionSelected = new EventEmitter<number>();

  onOptionClick(id: number): void {
    this.optionSelected.emit(id);
  }
}
