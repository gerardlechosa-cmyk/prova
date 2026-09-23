
// PART A: Interfície Joc
// Tema: Videojocs

export interface Joc {
    id: number;
    nom: string;
    preu: number;
    disponible: boolean;
    genere: string;
    descripcio?: string;
    puntuacio?: number;
}
