/*ng g i nombreInterfaz*/
/*ng generate interface nombreInterfaz*/

/*Interfaz de tarjeta: Es una estructura esperada con su tipo de dato.*/
export interface Card {
    id: string; // Números con letras (ej.: 123AB / 123 / ABC)
    img: string;
    alt: string;
    titulo: string;
    descrip: string;
    fechaPub: number;
}


