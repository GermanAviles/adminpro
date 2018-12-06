import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';



/** Componentes */
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GraficaDonaComponent } from './grafica-dona/grafica-dona.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  declarations: [
    IncrementadorComponent,
    GraficaDonaComponent
  ],
  exports: [
    IncrementadorComponent,
    GraficaDonaComponent
  ]
})

export class ComponentsModule { }
