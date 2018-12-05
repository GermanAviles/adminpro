import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Modulos */
import { SharedModule } from '../shared/shared.module';

/** Componentes */
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

/** Rutas */
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],

  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],

  imports: [
    SharedModule,
    FormsModule,
    PAGES_ROUTES
  ]
})

export class PagesModule { }
