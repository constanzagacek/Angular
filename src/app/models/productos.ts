/*ng g i carpeta/nombreInterfaz o nombreInterfaz unicamente*/
/*ng generate interface nombreInterfaz*/

/*Interfaz de tarjeta: Es una estructura esperada con su tipo de dato.*/

export interface Productos {
    id: number; // Para que sea autoincrementable
    nombre: string;
    descrip: string;
    precio: number;
    img?: string; // ? : Indica que no es una propiedad estrictamente requerida
    alt?: string;
}

// EJEMPLO
/* export interface Indumentaria {
    id: number; <- 2025
    nombre: string; <- "Remera"
    fechaPublicacion: Date; <- fechas: new Date ("12/01/25")
    activo: boolean; <- True or False
} */
