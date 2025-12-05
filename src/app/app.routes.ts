import { Routes } from '@angular/router';
import {SignalForms} from './signal-forms/signal-forms';

export const routes: Routes = [
  { path: '', component: SignalForms, pathMatch: 'full' },
];
