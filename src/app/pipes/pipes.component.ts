import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturePipe } from '../shared/pipes/temperature.pipe';
import { SortPipe } from '../shared/pipes/sort.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DatePipe, DecimalPipe, TemperaturePipe, SortPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  onReset(index: number) {
    this.historicTemperatures[index] = 18;

    // const newTemps = [...this.historicTemperatures];
    // newTemps[index] = 18;
    // this.historicTemperatures = newTemps;
  }
}
