import { Routes } from '@angular/router';
import { vehiculo } from './fomulario/vehiculo';

export const routes: Routes = [
  { path: '', redirectTo: 'vehiculo', pathMatch: 'full' },
  { path: 'vehiculo', component: vehiculo }
];
