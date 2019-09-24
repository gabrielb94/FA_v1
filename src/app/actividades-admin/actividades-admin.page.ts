import { Component, OnInit } from '@angular/core';
import { Actividad } from '../interfaces/actividad';

@Component({
  selector: 'app-actividades-admin',
  templateUrl: './actividades-admin.page.html',
  styleUrls: ['./actividades-admin.page.scss'],
})
export class ActividadesAdminPage implements OnInit {

  public activities = [
    {
      title: "Spinning"
    },
    {
      title: "Musculacion"
    },
    {
      title: "Crossfit"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
