import { Component } from '@angular/core';
import { SafeLinkfDirective } from '../../shared/directives/safe-link.directive';

@Component({
  selector: 'app-learning-resources',
  standalone: true,
  imports: [SafeLinkfDirective],
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css'
})
export class LearningResourcesComponent {

}
