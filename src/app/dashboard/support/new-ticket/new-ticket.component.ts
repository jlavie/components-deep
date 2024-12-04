import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild<ElementRef<HTMLFormElement>>('form');

  // @Output() add = new EventEmitter<{title: string; text: string}>();
  add = output<{title: string; text: string}>();

  enteredTitle = '';
  enteredText = '';

  ngOnInit(): void {
    console.log('tout n\'est pas chargé, il n\'est pas garanti que this.form soit renseigné renseigné')
    console.log('n\'est vérifié qu\'avec le décorateur')
    console.log(this.form?.nativeElement)
  }

  ngAfterViewInit(): void {
    console.log('Ici, on est garanti de pouvoir accéder aux éléments selectionnés via viewchild')
    console.log(this.form?.nativeElement)
  }

  onSubmit(title: string, text: string) {
    console.log(title);
    console.log(text);
    this.add.emit({title: title, text: text})

    // this.form?.nativeElement.reset();
    this.form?.nativeElement.reset();
  }

  onSubmitWithTwoWayBinding() {
    this.add.emit({title: this.enteredTitle, text: this.enteredText})
    this.enteredTitle = '';//grace au 2waybinding, les valeurs seront remises à vide, plus besoin de reset
    this.enteredText = '';
  }
}
