import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ ComponentsModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  openedMenu: number = 1;

  handleOptionSelected(optionId: number) {
    console.log('Opción seleccionada:', optionId);
    this.openedMenu = optionId;
  }
}
