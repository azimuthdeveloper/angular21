import {Component, signal} from '@angular/core';
import {Field, form} from '@angular/forms/signals';
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

  // colours = Object.entries(Catr)

  registrationForm = form(this.catRegistration);

  breeds = breed;
  colours = colours;

}

const colours = ['white', 'black', 'grey', 'brown'] as const;
const breed = ['bengal', 'moggie', 'persian', 'siamese', 'shorthair', 'ragdoll', 'unknown'] as const;


export interface CatRegistrationData{
  name: string;
  colour: typeof colours[number];
  breed: typeof breed[number];
}
