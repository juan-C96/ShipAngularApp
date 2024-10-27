import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { ShipsModule } from '../../components/ships/ships.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ ComponentsModule, ShipsModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
}
