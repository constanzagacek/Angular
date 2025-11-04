import { Component } from '@angular/core';
import { Productos } from '../../../../models/productos'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ThisReceiver } from '@angular/compiler';

/*
FormControl: Controlador de cada dato ingreado en el formulario.
FromGroup: Directiva para formularios reactivos en Angular, agrupa a FormControl.
ReactiveFormsModule: Permite hacer uso de formularios reactivos.
Validators: Valida los datos ingresados en un formulario.
*/

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})

export class NewProduct {
  // Propiedad PRIVADA -> Información aensible

  private contadorId = 1;

  // Colección de productos de tipo PRODUCTO

  coleccionProductos: Productos[] = [];

  // Instancia que se vincula con el formulario desde el HTML

  /* nombrePropiedad: new Control ->
   string -> "" / number -> null
   Validators.required -> Validado como valor requerido estrictamente */

  nuevoProducto = new FormGroup({ // Intancia que nuevoProducto es una agrupación de datos
    // Para activarlas usamos FormCOntrol, si son strings van "" y si son de tipo number se coloca null
    nombre: new FormControl("", Validators.required),
    descrip: new FormControl("", Validators.required),
    precio: new FormControl(null, Validators.required),
    // img: new FormControl("", Validators.required),
    // alt: new FormControl("", Validators.required)
  })

  /** 
   * @descripcion Método de creación de productos según la interfaz "Productos"
   */
  crearProducto(): void {
    if (this.nuevoProducto.valid) {
      const nuevoProducto: Productos = {
        // id -> Para que sea autoincrementable
        id: this.contadorId++,
        /* Para el resto de propiedades, le asignamos desde el formulario el valor que se recibió desde su 
        casilla o formControlName*/
        nombre: this.nuevoProducto.value.nombre!,
        precio: this.nuevoProducto.value.precio!,
        descrip: this.nuevoProducto.value.descrip!
      }

      // Agregamos nuevo producto a la colección de productos
      this.coleccionProductos.push(nuevoProducto);

      console.log("Productos agregados: ", nuevoProducto);
      console.log("Clección actual de productos", this.coleccionProductos);

      // Reseteamos el formulario
      this.nuevoProducto.reset()
    }
  }



}
