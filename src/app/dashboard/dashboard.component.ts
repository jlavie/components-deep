import { Component } from '@angular/core';
import { StatusComponent } from "./status/status.component";
import { TrafficComponent } from "./traffic/traffic.component";
import { SupportComponent } from "./support/support.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatusComponent, TrafficComponent, SupportComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
