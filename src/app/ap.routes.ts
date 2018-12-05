import { Routes, RouterModule } from '@angular/router';

/** ROUTAS */
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: '/dasboard', pathMatch: 'full' },
      { path: 'progress', component: ProgressComponent },
      { path: 'dasboard', component: DashboardComponent },
      { path: 'grafica1', component: Graficas1Component },
  ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot( routes, { useHash: true } );
