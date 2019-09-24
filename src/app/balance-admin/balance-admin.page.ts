import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-admin',
  templateUrl: './balance-admin.page.html',
  styleUrls: ['./balance-admin.page.scss'],
})
export class BalanceAdminPage implements OnInit {

  public transacciones = [
    {
      fecha: "1-1-1",
      concepto: "cuota",
      monto: 1000
    },
    {
      fecha: "1-1-2",
      concepto: "haberes",
      monto: 1000
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
