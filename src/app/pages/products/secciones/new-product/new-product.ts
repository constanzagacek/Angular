import { Component } from '@angular/core';
import { Products } from "../../../../models/products";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

/*
FormControl: Controlador de cada dato ingreado en el formulario.
FromGroup: Directiva para formularios reactivos en Angular, agrupa a FormControl.
ReactiveFormsModule: Permite hacer uso de formularios reactivos.
Validators: Valida los datos ingresados en un formulario.
*/

@Component({
  selector: 'app-new-product',
  imports: [],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {

}
