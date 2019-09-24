import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicios-admin',
  templateUrl: './ejercicios-admin.page.html',
  styleUrls: ['./ejercicios-admin.page.scss'],
})
export class EjerciciosAdminPage implements OnInit {

  public ejercicios = [
    {
      title: "Press plano"
    },
    {
      title: "Press inclinado"
    },
    {
      title: "Press mariposa"
    },
    {
      title: "Curl brazos"
    },
    {
      title: "Prensa 45"
    },
    {
      title: "Press militar"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
