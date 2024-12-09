import { Component, computed, inject } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { NgIf } from '@angular/common';
import { AuthDirective } from '../shared/directives/auth.directive';
import { LogDirective } from '../shared/directives/log.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [AuthComponent, LearningResourcesComponent, NgIf, AuthDirective, LogDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  private authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
