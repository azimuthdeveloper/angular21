import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {StepperCva} from '../stepper-cva/stepper-cva';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-steppers',
  imports: [
    StepperCva,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './steppers.html',
  styleUrl: './steppers.css',
})
export class Steppers {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      level: [5, [Validators.min(1), Validators.max(10)]],  // Initial value 5
      score: [0]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Submitted:', this.form.value);
    }
  }

  resetForm(): void {
    this.form.reset({ level: 1, name: '', score: 0 });
  }

  setLevel(value: number): void {
    this.form.patchValue({ level: value });  // Triggers writeValue() in stepper
  }
}
