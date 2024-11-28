import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]',
  // selector: 'button.appButton', => <button class='appButton'>
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  text = input.required<string>();
  icon = input.required<string>();
}
