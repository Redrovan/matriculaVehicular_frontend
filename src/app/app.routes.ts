import { Routes } from '@angular/router';
import { vehiculo } from './formulario/vehiculo';

export const routes: Routes = [
  { path: '', redirectTo: 'vehiculo', pathMatch: 'full' },
  { path: 'vehiculo', component: vehiculo }
];
