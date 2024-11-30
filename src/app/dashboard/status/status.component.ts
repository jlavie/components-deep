import { Component, OnInit, output } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})

export class StatusComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    setInterval(() => {
      this.dashboardService.updateStatus();
    }, 3000)
  }

  image = output();

  get currentStatus() {
    return this.dashboardService.getCurrentStatus();
  }
}
