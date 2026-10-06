//Primera classe 
export class Producte{
    nom: string;
    preu: number;

    constructor(nom : string, preu : number){
        this.nom = nom;
        this.preu = preu;
    }

    //mètodes
    toSting() : string {
        return `${this.nom} - ${this.preu}€`;
    }

    preuAmbIva() : number{
        return this.preu * 1.21;
    }
}