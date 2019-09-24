import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad-alum',
  templateUrl: './actividad-alum.page.html',
  styleUrls: ['./actividad-alum.page.scss'],
})
export class ActividadAlumPage implements OnInit {

  public appPages = [
    {
      title: "Foro",
      url: "/null",
      icon: "clipboard"
    },
    {
      title: "Alumnos",
      url: "/null",
      icon: "clipboard"
    },
    {
      title: "Planes",
      url: "/null",
      icon: "clipboard"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
