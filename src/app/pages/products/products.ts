import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from "../../models/card";

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})

export class Products {
  // Propiedad PÚBLICA / PRIVADA 
  public infoTarjeta: Card[];

  constructor() {
    this.infoTarjeta = [

      {
        id: 1,
        img: "../../../assets/rosas.jpg",
        alt: "Foto sobre Rosas",
        titulo: "Rosas",
        descrip: "Foto de unas rosas",
        fechaPub: 2025
      },
      {
        id: 2,
        img: "../../../assets/cerezo.jpg",
        alt: "Foto sobre unas flores de Cerezo",
        titulo: "Flores de Cerezo",
        descrip: "Foto de unas flores de cerezo",
        fechaPub: 2025
      },
      {
        id: 3,
        img: "../../../assets/orquídeaPhalaenopsis.jpg",
        alt: "Foto sobre flores Orquídeas Phalaenopsis",
        titulo: "Flores Orquídeas Phalaenopsis",
        descrip: "Foto sobre flores Orquídeas Phalaenopsis",
        fechaPub: 2025
      },
      {
        id: 4,
        img: "../../../assets/jacinto.jpg",
        alt: "Foto sobre unas flores de Jacinto",
        titulo: "Flores de Jacinto",
        descrip: "Foto sobre unas flores de Jacinto",
        fechaPub: 2025
      }
    ]
  }

  tarjetaSeleccionada: any = null;

  // verMas(tarjeta: any) {
  //   this.tarjetaSeleccionada = tarjeta;
  // }

  verMas(tarjeta: Card) {
  if (tarjeta) {
    this.tarjetaSeleccionada = tarjeta;
  }
}
}

