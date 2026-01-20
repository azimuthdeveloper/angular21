import { Routes } from '@angular/router';
import {SignalForms} from './signal-forms/signal-forms';
import {FormGroupForms} from "./form-group-forms/form-group-forms";
import {Steppers} from './steppers/steppers';

export const routes: Routes = [
  { path: 'signal', component: SignalForms, title: 'Signal Forms' },
  { path: 'formgroup', component: FormGroupForms, title: 'Reactive Forms' },
  { path: 'steppercva', component: Steppers, title: 'Stepper CVA' },
  { path: '**', redirectTo: '/signal'}
];
