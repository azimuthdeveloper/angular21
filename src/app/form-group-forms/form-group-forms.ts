import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, NonNullableFormBuilder as fb, Validators} from "@angular/forms";
import {breed, colours} from "../signal-forms/signal-forms";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-form-group-forms',
  imports: [
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './form-group-forms.html',
  styleUrl: './form-group-forms.css',
})
export class FormGroupForms {

  formGroup = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required
    ]),
    breed: new FormControl<typeof breed[number]>('unknown'),
    colours: new FormControl<typeof colours[number]>('black')
  });


  protected readonly colours = colours;
  protected readonly breed = breed;
}
