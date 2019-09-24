import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planes-admin',
  templateUrl: './planes-admin.page.html',
  styleUrls: ['./planes-admin.page.scss'],
})
export class PlanesAdminPage implements OnInit {

  public planes = [
    {
      title: "Plan crecimiento"
    },
    {
      title: "Plan definicion 1"
    },
    {
      title: "Plan definicion 2"
    },
    {
      title: "Plan dieta femenino"
    },
    {
      title: "Plan dieta masculino"
    },
    {
      title: "Plan adaptacion 1"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
