import { Routes, RouterModule } from '@angular/router';
/** Componentes */
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

const routes: Routes = [
  { path: '',
    component: PagesComponent,
      children: [
        { path: '', redirectTo: '/dasboard', pathMatch: 'full' },
        { path: 'progress', component: ProgressComponent },
        { path: 'dasboard', component: DashboardComponent },
        { path: 'graficas1', component: Graficas1Component },
      ]
  },

];

export const PAGES_ROUTES = RouterModule.forChild( routes );
