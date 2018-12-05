import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


/** Componentes */
import { IncrementadorComponent } from './incrementador/incrementador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    IncrementadorComponent
  ],
  exports: [
    IncrementadorComponent
  ]
})

export class ComponentsModule { }
