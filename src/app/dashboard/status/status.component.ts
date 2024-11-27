import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})

export class StatusComponent {
  constructor(private dashboardService: DashboardService) {}

  get currentStatus() {
    return this.dashboardService.getCurrentStatus();
  }
}
