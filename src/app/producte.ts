//Primera classe
export class Producte {
    nom: string;
    preu: number;

    constructor(nom: string, preu: number){
        this.nom = nom;
        this.preu = preu;
    }

    //mètode normal
    toString(): string {
        return `${this.nom} - ${this.preu}€`;
    }

    preuAmbIva(): number {
        return this.preu * 1.21;
    }

    descompte(): number{
        return this.preu * 0.9;
    }
}