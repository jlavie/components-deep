import { AfterContentInit, Component, contentChild, ContentChild, ElementRef, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
  label = input.required<string>();

  private el = inject(ElementRef); // Angular donne accès à l'élément host du composant

  // @ContentChild('input') private control?:ElementRef<HTMLInputElement | HTMLTextAreaElement>
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  ngAfterContentInit(): void {
    console.log('Ici, on est garanti de pouvoir accéder aux éléments selectionnés via contentChild')
    console.log(this.control)
  }

  // @HostListener('clic') onClick() {
  //   console.log('clicked');
  // }

  onClick() {
    console.log('clicked');
    console.log(this.el);
    // console.log(this.control);
    console.log(this.control());
  }
}
