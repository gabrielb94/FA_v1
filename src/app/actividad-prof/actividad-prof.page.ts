import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad-prof',
  templateUrl: './actividad-prof.page.html',
  styleUrls: ['./actividad-prof.page.scss'],
})
export class ActividadProfPage implements OnInit {

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
      title: "Ejercicios",
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
