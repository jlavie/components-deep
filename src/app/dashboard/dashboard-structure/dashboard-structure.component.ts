import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-structure',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-structure.component.html',
  styleUrl: './dashboard-structure.component.css'
})
export class DashboardStructureComponent {
  // @Input({required: true}) image!: { source: string; alt: string; };
  // @Input() title!: string;

  image = input.required<{ source: string; alt: string; }>();
  title = input();
}
