import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent {

}
