import { Routes } from '@angular/router';
import {SignalForms} from './signal-forms/signal-forms';
import {FormGroupForms} from "./form-group-forms/form-group-forms";
import {Steppers} from './steppers/steppers';
import {StepperSignalForms} from './stepper-signal-forms/stepper-signal-forms';

export const routes: Routes = [
  { path: 'signal', component: SignalForms, title: 'Signal Forms' },
  { path: 'formgroup', component: FormGroupForms, title: 'Reactive Forms' },
  { path: 'steppercva', component: Steppers, title: 'Stepper CVA' },
  { path: 'steppersignal', component: StepperSignalForms, title: 'Stepper Signal Forms'},
  { path: '**', redirectTo: '/signal'}
];
