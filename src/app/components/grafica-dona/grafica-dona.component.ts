import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styleUrls: ['./grafica-dona.component.css']
})
export class GraficaDonaComponent implements OnInit {

  @Input() charConfig: any = {};

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // @Input() doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // @Input() doughnutChartData: number[] = [350, 450, 100];
  // @Input() doughnutChartType: string = 'doughnut';


  constructor() {
  }

  ngOnInit() {
    console.log(this.charConfig);
  }

}
