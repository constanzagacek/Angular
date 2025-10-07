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
        img: "../../../assets/paisajemontañosos.jpg",
        alt: "Foto de un paisaje turítico",
        titulo: "Paisajes",
        descrip: "Foto de un paisaje",
        fechaPub: 2025
      },
      {
        id: "2P",
        img: "../../../assets/paisajemontañosos(2).jpg",
        alt: "Foto de un paisaje turítico",
        titulo: "Paisajes",
        descrip: "Foto de un paisaje",
        fechaPub: 2024
      },
      {
        id: "3P",
        img: "../../../assets/paisajemontañosos(3).jpg",
        alt: "Foto de un paisaje turítico",
        titulo: "Paisajes",
        descrip: "Foto de un paisaje",
        fechaPub: 2023
      },
      {
        id: "3P",
        img: "../../../assets/paisaje(4).jpg",
        alt: "Foto de un paisaje turítico",
        titulo: "Paisajes",
        descrip: "Foto de un paisaje",
        fechaPub: 2022
      }
    ]
  }
}
