import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-ship-filter',
  standalone: true,
  imports: [ FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './ship-filter.component.html',
  styleUrl: './ship-filter.component.css'
})
export class ShipFilterComponent {
  searchTerm: string = ''; 
  @Output() filterChange = new EventEmitter<string>();

  onSearchChange(): void {
    this.filterChange.emit(this.searchTerm);
  }
}
