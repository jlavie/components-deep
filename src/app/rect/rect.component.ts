import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [FormsModule, DisplayComponent],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css'
})
export class RectComponent {
  rectSize = {
    width: '100',
    height: '100',
  };
}
