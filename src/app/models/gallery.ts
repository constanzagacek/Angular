/*ng g i carpeta/nombreInterfaz o nombreInterfaz unicamente*/
/*ng generate interface nombreInterfaz*/

/*Interfaz de tarjeta: Es una estructura esperada con su tipo de dato.*/

export interface Gallery {
    id: string; // Números con letras (ej.: 123AB / 123 / ABC)
    img: string;
    alt: string;
    titulo: string;
}

