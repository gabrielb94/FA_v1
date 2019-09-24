import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades-alum',
  templateUrl: './actividades-alum.page.html',
  styleUrls: ['./actividades-alum.page.scss'],
})
export class ActividadesAlumPage implements OnInit {

  public activities = [
    {
      title: "Spinning"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
