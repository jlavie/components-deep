import { Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { AdministrationComponent } from './administration/administration.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/administration', pathMatch: 'full' },
    { path: 'administration', component: AdministrationComponent },
    { path: 'lifecycle', component: LifecycleComponent },
  ];