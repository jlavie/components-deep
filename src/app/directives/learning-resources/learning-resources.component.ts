import { Component } from '@angular/core';
import { SafeLinkfDirective } from '../../shared/directives/safe-link.directive';
import { LogDirective } from '../../shared/directives/log.directive';

@Component({
  selector: 'app-learning-resources',
  standalone: true,
  imports: [SafeLinkfDirective, LogDirective],
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css'
})
export class LearningResourcesComponent {

}
