import { Component, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-structure',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-structure.component.html',
  styleUrl: './dashboard-structure.component.css',
  host: {
    class: 'dashboard-item'
  },
  encapsulation: ViewEncapsulation.None
})
export class DashboardStructureComponent {
  // @Input({required: true}) image!: { source: string; alt: string; };
  // @Input() title!: string;

  image = input.required<{ source: string; alt: string; }>();
  title = input();
}
