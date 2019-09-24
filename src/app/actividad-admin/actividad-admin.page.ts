import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad-admin',
  templateUrl: './actividad-admin.page.html',
  styleUrls: ['./actividad-admin.page.scss'],
})
export class ActividadAdminPage implements OnInit {

  public appPages = [
    {
      title: "Clases",
      url: "/clases-admin",
      icon: "clipboard"
    },
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
      title: "Solicitudes",
      url: "/null",
      icon: "clipboard"
    },
    {
      title: "Ejercicios",
      url: "/ejercicios-admin",
      icon: "clipboard"
    },
    {
      title: "Planes",
      url: "/planes-admin",
      icon: "clipboard"
    },
    {
      title: "Editar",
      url: "/null",
      icon: "clipboard"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
