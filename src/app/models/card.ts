export interface Card {
    id: number; // Para que sea autoincrementable
    img: string;
    alt: string;
    titulo: string;
    descrip: string;
    fechaPub: number;    
}

export interface Carrousel {
    id: string;
    img: string;
    alt: string;
    titulo: string;
}
