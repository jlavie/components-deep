import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})

export class TrafficComponent {
  constructor(private dashboardService: DashboardService) {}

  get maxTraffic() {
    return this.dashboardService.getMaxTraffic();
  }

  get dashboardData() {
    return this.dashboardService.getDashboardData()
  }
}
