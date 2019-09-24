import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases-admin',
  templateUrl: './clases-admin.page.html',
  styleUrls: ['./clases-admin.page.scss'],
})
export class ClasesAdminPage implements OnInit {

  public clases = [
    {
      fecha: "16/09/19"
    },
    {
      fecha: "18/09/19"
    },
    {
      fecha: "20/09/19"
    },
    {
      fecha: "23/09/19"
    },
    {
      fecha: "25/09/19"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
