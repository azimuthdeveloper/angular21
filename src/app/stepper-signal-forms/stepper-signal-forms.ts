import { Component, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-stepper-signal-forms',
  imports: [
    Field,
    JsonPipe
  ],
  templateUrl: './stepper-signal-forms.html',
  styleUrl: './stepper-signal-forms.css',
})
export class StepperSignalForms {
  formData = signal<StepperFormData>({
    name: '',
    level: 5
  });

  stepperForm = form(this.formData);

  increment(): void {
    const currentLevel = this.stepperForm.level().value();
    if (currentLevel < 10) {
      this.stepperForm.level().set(currentLevel + 1);
    }
  }

  decrement(): void {
    const currentLevel = this.stepperForm.level().value();
    if (currentLevel > 1) {
      this.stepperForm.level().set(currentLevel - 1);
    }
  }

  onSubmit(): void {
    console.log('Submitted:', this.formData());
  }

  resetForm(): void {
    this.formData.set({ name: '', level: 1 });
  }

  setLevel(value: number): void {
    this.stepperForm.level().set(Math.max(1, Math.min(10, value)));
  }
}

export interface StepperFormData {
  name: string;
  level: number;
}
