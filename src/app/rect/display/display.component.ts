import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  // Todo: Implement custom two-way binding
  // size = input.required<{width: string; height: string;}>();
  // sizeChange = output<{width: string; height: string;}>();// la sortie doit avoir le même nom que l'entré + Change

  size = model.required<{width: string; height: string;}>()

  onReset() {
    // this.sizeChange.emit({
    //   width: '200',
    //   height: '100'
    // })
    this.size.set({
      width: '200',
      height: '100'
    })
  }
}
