import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progresoA: number = 20;
  progresoV: number = 30;

  constructor() { }

  ngOnInit() {
  }

 /** Funcion para recibir el evento que envia el componente hijo
  updateBar( evento: number ) {
    console.log(evento);
  }
*/
}
