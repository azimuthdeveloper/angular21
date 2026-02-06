import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-stepper-cva',
  imports: [],
  templateUrl: './stepper-cva.html',
  styleUrl: './stepper-cva.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StepperCva),
      multi: true
    }
  ]
})
export class StepperCva implements ControlValueAccessor {
  currentValue = 1;
  isDisabled = false;

  private onChange: (value: number) => void = () => {
  };
  private onTouched: () => void = () => {};

  writeValue(value: number | null): void {
    this.currentValue = Math.max(1, Math.min(10, (value ?? 1)));
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  increment(): void {
    if (this.currentValue < 10 && !this.isDisabled) {
      this.currentValue++;
      this.onChange(this.currentValue);
      this.onTouched();
    }
  }

  decrement(): void {
    if (this.currentValue > 1 && !this.isDisabled) {
      this.currentValue--;
      this.onChange(this.currentValue);
      this.onTouched();
    }
  }

  isEven(num: number): boolean {
    console.log('isEven called');
    return num % 2 === 0;
  }

  // isEven(num: number) => num % 2 === 0;
}
