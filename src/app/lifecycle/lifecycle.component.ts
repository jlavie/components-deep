import { Component } from '@angular/core';
import { ExampleComponent } from "./example/example.component";

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [ExampleComponent],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent {
  lifecycleComponentIsVisible = false;
  lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  }
}
