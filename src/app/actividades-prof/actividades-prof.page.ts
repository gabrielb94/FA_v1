import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades-prof',
  templateUrl: './actividades-prof.page.html',
  styleUrls: ['./actividades-prof.page.scss'],
})
export class ActividadesProfPage implements OnInit {

  public activities = [
    {
      title: "Zumba"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
