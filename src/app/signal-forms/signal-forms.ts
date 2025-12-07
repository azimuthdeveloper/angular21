import {Component, signal} from '@angular/core';
import {Field, form, required} from '@angular/forms/signals';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-signal-forms',
  imports: [
    Field,
    JsonPipe
  ],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.css',
})
export class SignalForms {
  catRegistration = signal<CatRegistrationData>({
    name: '',
    colour: 'white',
    breed: 'unknown'
  });

  registrationForm = form(this.catRegistration, x => {
    required(x.name, {message: 'Name is required'})
  });

  breeds = breed;
  colours = colours;

  constructor() {
    this.registrationForm.name().value().length;
  }

}

export const colours = ['white', 'black', 'grey', 'brown'] as const;
export const breed = ['bengal', 'moggie', 'persian', 'siamese', 'shorthair', 'ragdoll', 'unknown'] as const;


export interface CatRegistrationData{
  name: string;
  colour: typeof colours[number];
  breed: typeof breed[number];
}
