import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte'; //PER PODER USAR LA iterface DE TIPUS Producte s'ha d'importar
import { Producte as ProducteClass } from './producte'; //Importem la classe PRODUCTE ASSIGANT UN ALIAS
import { Tarjeta } from './components/tarjeta/tarjeta';
import { Perfil } from './components/perfil/perfil';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tarjeta, Perfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');
    //OBJECTIU DE LA SESSIÓ 2: Veure la diferència entre JS i TS --> TS = JS + tipus.
    //ELS TIPUS no canvien com funciona el codi --> AJUDEN A DETECTAR ERRORS abans d'executar.
    // " undefined is not a function? " --> AIXÒ ÉS EL QUE VOLEM EVITAR!!!!!

    /*function saluda (nom) {
      return nom.toUpperCase();
    }

    saluda (40);
    --> Parameter 'nom' implicitly has an 'any' type
    */

   
    /*function saluda(nom:string) {
      return nom.toUpperCase();
    }

    saluda(40);

    --> Argument of type 'number' is not assignable to parameter of type 'string'.
    */

    //TIPUS BASICS
    /*nom: string = 'Angular';
    nom2: string = 'Laravel';
    versio : number = 20;
    actiu: boolean = true;

    //ARRAYS TIPATS
    colors : string[] = ['vermell', 'verd', 'blau'];
    frameworks: string[] = [this.nom, this.nom2];
    punts : number[] = [10, 15, 20];

    //TypeScrips infereix (adivina) el tipus automàticament
    ciutat = 'Lleida'; //string
    codiP = 25605; //number

    //objecte de tipus Producte

    producte: Producte = {
      id: 1, 
      nom : 'PC', 
      preu : 999,
      estoc : 10,
      categoria: 'informatica'
    };

    producte2: Producte = {
      id: 2,
      nom: 'Ivan',
      preu: 5,
      estoc : 2,
      categoria: 'jkshda'
    }

    productes: Producte[] = [this.producte, this.producte2]; 

    p1 = new ProducteClass('Teclat', 89.99);
    
    constructor(){
        console.log(this.p1.toSting());
        console.log(this.p1.preuAmbIva());
        console.log(this.p1.toSting());
    }

    //1. AFEGIU UN MÈTODE A LA CLASSE PRODUCTE descripcio() que retorni un string amb nom i preu
    //2. MÈTODE descompte() que retorni el preu amb un 10% de rebaixa
    //3. creeu un nou producte i mostreu el descompte per consola
    //4. cerqueu la manera de mostrar el descompte amb un popup
  
*/
ciutats: string[] = ['Barcelona', 'Madrid', 'Girona', 'Tarragona'];

productes: Producte [] = [
  {id: 1, nom : 'teclat', preu : 89.99, estoc : 12, categoria: 'perifèrics'},
  {id: 2, nom : 'monitor', preu : 350, estoc : 3, categoria: 'pantallezs'},
  {id: 2, nom : 'monitor', preu : 350, estoc : 3, categoria: 'pantallezs'},
];
    
}
