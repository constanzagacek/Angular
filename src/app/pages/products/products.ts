import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../models/card';

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
      // 

      {
        id: "1P",
        img: "../../../assets/rosas.jpg",
        alt: "Foto sobre Rosas",
        titulo: "Flores",
        descrip: "Foto de unas rosas",
        fechaPub: 2025
      },
      {
        id: "2P",
        img: "../../../assets/cerezo.jpg",
        alt: "Foto sobre unas flores de Cerezo",
        titulo: "Flores",
        descrip: "Foto de unas flores de cerezo",
        fechaPub: 2025
      },
      {
        id: "3P",
        img: "../../../assets/orquídeaPhalaenopsis.jpg",
        alt: "Foto sobre flores Orquídeas Phalaenopsis",
        titulo: "Flores",
        descrip: "Foto sobre flores Orquídeas Phalaenopsis",
        fechaPub: 2025
      },
      {
        id: "3P",
        img: "../../../assets/jacinto.jpg",
        alt: "Foto sobre unas flores de Jacinto",
        titulo: "Flores",
        descrip: "Foto sobre unas flores de Jacinto",
        fechaPub: 2025
      }
    ]
  }

  tarjetaSeleccionada: any = null;

  verMas(tarjeta: any) {
    this.tarjetaSeleccionada = tarjeta;

  }
}

