import {Component, linkedSignal, model} from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-stepper-control',
  standalone: true,
  templateUrl: './stepper-control.html',
  styleUrl: './stepper-control.css'
})
export class StepperControl implements FormValueControl<number> {
  readonly value = model<number>(1);
  readonly isEven = linkedSignal(() => this.value() % 2 == 0);
  disabled = model<boolean>(false);
  touched = model<boolean>(false);

  increment(): void {
    const currentValue = this.value();
    if (currentValue < 10 && !this.disabled()) {
      this.value.set(currentValue + 1);
      this.touched.set(true);
    }
  }

  decrement(): void {
    const currentValue = this.value();
    if (currentValue > 1 && !this.disabled()) {
      this.value.set(currentValue - 1);
      this.touched.set(true);
    }
  }
}
