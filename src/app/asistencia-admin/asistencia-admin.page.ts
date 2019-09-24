import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia-admin',
  templateUrl: './asistencia-admin.page.html',
  styleUrls: ['./asistencia-admin.page.scss'],
})
export class AsistenciaAdminPage implements OnInit {

  public alumnos = [
    {
      nombre: "Profesor"
    },
    {
      nombre: "Lionel Messi"
    },
    {
      nombre: "Lionel Messi"
    },
    {
      nombre: "Lionel Messi"
    },
    {
      nombre: "Lionel Messi"
    },
    {
      nombre: "Lionel Messi"
    },
    {
      nombre: "Lionel Messi"
    }
  ]

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Asistencia confirmada !',
      duration: 1000,
      position: 'middle'
    });
    toast.present();
  }

}