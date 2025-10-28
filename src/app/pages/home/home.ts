import { Component } from '@angular/core';
import { Carrousel } from '../../models/productos';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  public infoCarrusel: Carrousel[];

  constructor() {
    this.infoCarrusel = [
      {
        id: "1F",
        img: "../../../assets/camelia.jpg",
        alt: "Foto de una flor de Camelia",
        titulo: "FLORES"
      },
      {
        id: "2F",
        img: "../../../assets/echeveria_elegans.jpg",
        alt: "Foto de una potus llamado Echeveria Elegans",
        titulo: "POTUS"
      },
      {
        id: "3F",
        img: "../../../assets/ficus_benjamina.jpg",
        alt: "Foto de un arbolito llamado Ficus Benjamina",
        titulo: "ÁRBOLES"
      },
    ]
  }
}