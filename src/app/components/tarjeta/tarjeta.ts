/*Aquest fitxer conté la lògica: propietats, mètodes, getters...*/

import { Component } from '@angular/core';
import { Producte } from '../../interfaces/producte';

@Component({
  selector: 'app-tarjeta',  /* Per usar-lo al HTML d'altres components, com una etiqueta HTML personalitzada*/
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  nom: String = 'Ordinador Gamer Pro';
  preu : number = 1299;
  estoc : number = 5;

  producte : Producte = {
    id: 1,
    nom: 'Ordinador Gamer Pro',
    preu: 1299,
    estoc: 5,
    categoria: 'Informàtica',
  };

   producte2 : Producte = {
    id: 2,
    nom: 'Ordinador Gamer',
    preu: 1099,
    estoc: 2,
    categoria: 'Informàtica',
  };

  /* Getter --> és un tipus especial de propietat calculada. En lloc de guardar un valor, el CALCULA cada cop que s'accedeix.
  get nomDelGetter(): TipusRetorn {
    retrun calcul;
  }
    Al TEMPLATE s'usa com una PROPIETAT, sense parentesis {{nomDelGetter}}
  */

    //Getter1: preu amb IVA del 21%
    get preuAmbIva(): number {
      return this.producte.preu * 1.21;
    }

    //Getter2: estat de disponibilitat en text
    get estatDisponibilitat(): string{
      if (this.producte.estoc === 0) return 'Esgotat';
      if (this.producte.estoc < 3) return 'Últimes unitats';
      return 'Disponible';
    }



}


/*
INTERPOLACIÓ DE DADES {{}}
Permet connectar les dades del TS a l'HTML
Permet incrustar expressions TS dins de l'HTML, angular avalaua l'expressió i mostra el resultat com a text.

{{nomPropietat}} --> mostra el valor d'una propietat de la classe
{{2 + 3}} --> mostra 5
{{text.toUpperCase()}} --> mostra el text en majúscules
{{edat >= 18 ? 'Major d\'edat' : 'Menor d\'edat'}} --> operador ternari

amb {{nom}} --> el valor por canviar i l'HTML s'actualitzarà automàticament. Hardcoded és x sempre és estàtic.
*/