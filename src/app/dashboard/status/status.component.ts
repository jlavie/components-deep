import { Component, DestroyRef, effect, inject, OnInit, output } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})

export class StatusComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {
    effect(() => {
      console.log(this.currentStatus());
    })
  }

  private destroyRef = inject(DestroyRef)

  ngOnInit() {
    const interval = setInterval(() => {
      this.dashboardService.updateStatus();
    }, 3000)

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

  image = output();

  get currentStatus() {
    return this.dashboardService.getCurrentStatus();
  }
}
