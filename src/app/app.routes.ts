import { Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { AdministrationComponent } from './administration/administration.component';
import { RectComponent } from './rect/rect.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/administration', pathMatch: 'full' },
    { path: 'administration', component: AdministrationComponent },
    { path: 'lifecycle', component: LifecycleComponent },
    { path: 'rec', component: RectComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'pipes', component: PipesComponent },
  ];