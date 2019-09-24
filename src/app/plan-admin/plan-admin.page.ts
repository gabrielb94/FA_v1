import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-admin',
  templateUrl: './plan-admin.page.html',
  styleUrls: ['./plan-admin.page.scss'],
})
export class PlanAdminPage implements OnInit {

  public ejercicios = [
    {
      ejercicio: "uno",
      series: 2,
      repeticiones: 10
    },
    {
      ejercicio: "dos",
      series: 4,
      repeticiones: 10
    },
    {
      ejercicio: "tres",
      series: 5,
      repeticiones: 15
    },
    {
      ejercicio: "cuatro",
      series: 3,
      repeticiones: 10
    },
    {
      ejercicio: "cinco",
      series: 3,
      repeticiones: 20
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
