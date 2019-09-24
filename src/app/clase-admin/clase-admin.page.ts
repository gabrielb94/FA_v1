import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase-admin',
  templateUrl: './clase-admin.page.html',
  styleUrls: ['./clase-admin.page.scss'],
})
export class ClaseAdminPage implements OnInit {

  public appPages = [
    {
      title: "Asistencia",
      url: "/asistencia-admin",
      icon: "clipboard"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
