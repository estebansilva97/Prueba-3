import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';

interface IUser {
  nombre: string;
  porcentaje: number;
  periodo: string;
  actividad: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private chartsData: DashboardChartsData) {
  }

  public users: IUser[] = [
    {
      nombre: 'Maria Alvarez',
      porcentaje: 50,
      periodo: 'Nov 11, 2022 - Dic 10, 2022',
      actividad: 'Hace 10 minutos',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success'
    },
    {
      nombre: 'Juan Ulloa',
      porcentaje: 10,
      periodo: 'Nov 11, 2022 - Dic 10, 2022',
      actividad: 'Hace 5 minutos',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info'
    },
    {
      nombre: 'Julio Rodriguez',
      porcentaje: 74,
      periodo: 'Nov 11, 2021 - Dic 11, 2022',
      actividad: 'Hace 1 hora',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning'
    },
    {
      nombre: 'Jean Ortiz',
      porcentaje: 98,
      periodo: 'Nov 11, 2022 - Dic 10, 2022',
      actividad: 'Hace 4 horas',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger'
    },
    {
      nombre: 'Viviana Peréz',
      porcentaje: 22,
      periodo: 'Nov 11, 2022 - Dic 10, 2022',
      actividad: 'Hace 15 horas',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary'
    },
    {
      nombre: 'David Silva',
      porcentaje: 43,
      periodo: 'Nov 11, 2022 - Nov 10, 2022',
      actividad: 'Hace 24 horas',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark'
    }
  ];
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Mes')
  });

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}
