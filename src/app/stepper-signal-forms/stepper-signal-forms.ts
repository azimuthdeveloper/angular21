import { Component, signal } from '@angular/core';
import { Field, form, required } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { StepperControl } from './stepper-control';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-stepper-signal-forms',
  imports: [
    Field,
    JsonPipe,
    StepperControl,
    FormsModule
  ],
  templateUrl: './stepper-signal-forms.html',
  styleUrl: './stepper-signal-forms.css',
})
export class StepperSignalForms {
  formData = signal<StepperFormData>({
    name: '',
    level: 5,
    score: 0
  });

  stepperForm = form(this.formData, x => {
    required(x.name, { message: 'Name is required' });
  });

  onSubmit(): void {
    if (this.stepperForm().valid()) {
      console.log('Submitted:', this.formData());
    }
  }

  resetForm(): void {
    this.formData.set({ level: 1, name: '', score: 0 });
  }

  setLevel(value: number): void {
    this.stepperForm.level().value.set(value);
  }
}

export interface StepperFormData {
  name: string;
  level: number;
  score: number;
}
