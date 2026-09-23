import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte'; //PER PODER USAR LA iterface DE TIPUS Producte s'ha d'importar
import { Producte as ProducteClass } from './producte'; //Importem la classe Producte assignant un alias.

// REPTE S02 — imports nous
import { Joc } from './interfaces/joc';
import { Cistella } from './cistella';
import { Alumne } from './alumne';
import { saludar, esMajorEdat, sumarArray } from './funcions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
  nom: string = 'Angular';
  nom2: string = 'Laravel';
  versio: number = 20;
  actiu: boolean = true;

  //ARRAYS TIPATS
  colors: string[] = ['vermell', 'verd', 'blau'];
  frameworks: string[] = [this.nom, this.nom2];
  punts: number[] = [10, 15, 20];

  //TypeScrips infereix (adivina) el tipus automàticament
  ciutat = 'Lleida'; //string
  codiP = 25605; //number

  //objecte de tipus Producte

  producte: Producte = {
    id: 1,
    nom: 'PC',
    preu: 999,
    disponible: true
  };

  producte2: Producte = {
    id: 2,
    nom: 'Ivan',
    preu: 5,
    disponible: false,
  };

  productes: Producte[] = [this.producte, this.producte2];

  p1 = new ProducteClass('Teclat', 89.99);
  p2 = new ProducteClass('Monitor', 49.99);

  // ─── PART B: Array de jocs (minim 5 elements) ────────────────────────────
  jocs: Joc[] = [
    { id: 1, nom: 'The Legend of Zelda', preu: 59.99, disponible: true,  genere: 'Aventura', descripcio: 'Un classic inoblidable', puntuacio: 9.8 },
    { id: 2, nom: 'FIFA 25',             preu: 69.99, disponible: true,  genere: 'Esport',   puntuacio: 7.5 },
    { id: 3, nom: 'Cyberpunk 2077',      preu: 29.99, disponible: false, genere: 'RPG',      descripcio: 'Mon obert futurista', puntuacio: 8.1 },
    { id: 4, nom: 'Minecraft',           preu: 19.99, disponible: true,  genere: 'Sandbox',  descripcio: 'Construeix el teu mon' },
    { id: 5, nom: 'Elden Ring',          preu: 49.99, disponible: true,  genere: 'RPG',      puntuacio: 9.5 },
    { id: 6, nom: 'Fortnite',            preu: 0,     disponible: false, genere: 'Battle Royale' },
  ];

  // Retorna els jocs disponibles (disponible === true)
  getActius(): Joc[] {
    return this.jocs.filter(j => j.disponible);
  }

  // Retorna el joc amb l'id indicat, o undefined si no existeix
  findById(id: number): Joc | undefined {
    return this.jocs.find(j => j.id === id);
  }

  // Retorna un string formatat amb la informacio del joc
  formatarElement(joc: Joc): string {
    const estat = joc.disponible ? 'Disponible' : 'No disponible';
    const punts = joc.puntuacio !== undefined ? ` | Puntuacio: ${joc.puntuacio}/10` : '';
    return `[${joc.id}] ${joc.nom} (${joc.genere}) - ${joc.preu}EUR - ${estat}${punts}`;
  }

  constructor() {
    console.log(this.p1.toString());
    console.log(this.p1.preuAmbIva());
    console.log(this.p1.toString());
    console.log(this.p2.descompte());

    // ─── PART B: proves ──────────────────────────────────────────────────────
    console.log('--- Jocs actius ---');
    this.getActius().forEach(j => console.log(this.formatarElement(j)));

    console.log('--- Find by id 3 ---');
    const trobat = this.findById(3);
    console.log(trobat ? this.formatarElement(trobat) : 'No trobat');

    // ─── PART C: Cistella ────────────────────────────────────────────────────
    const cistella = new Cistella('Gerard');
    cistella.afegirJoc(this.jocs[0]);
    cistella.afegirJoc(this.jocs[4]);
    console.log(`Cistella de ${cistella.propietari} - Total: ${cistella.preuTotal}EUR`);
    cistella.eliminarJoc(1);
    console.log(`Cistella despres d'eliminar id=1 - Total: ${cistella.preuTotal}EUR`);

    // ─── Funcions auxiliars ───────────────────────────────────────────────────
    console.log(saludar('Gerard'));        // Hola, Gerard!
    console.log(esMajorEdat(20));          // true
    console.log(esMajorEdat(15));          // false
    console.log(sumarArray([10, 20, 30])); // 60

    // ─── Classe Alumne ────────────────────────────────────────────────────────
    const alumne1 = new Alumne('Gerard', 20, 'DAW', [7, 8, 6, 9]);
    const alumne2 = new Alumne('Anna', 17, 'DAM', [4, 3, 5, 2]);
    console.log(alumne1.presentar());
    console.log('Mitjana:', alumne1.mitjanaNotes, '| Ha aprovat?', alumne1.haAprobat);
    console.log(alumne2.presentar());
    console.log('Mitjana:', alumne2.mitjanaNotes, '| Ha aprovat?', alumne2.haAprobat);
  }



  //1. AFEGIU UN METODE A LA CLASSE PRODUCTE descripcio() que retorni un string amb nom i preu.
  //2. METODE descompte que retorni el preu amb un 10% de rebaixa.
  //3. Creeu un nou producte i mostreu el descompte per consola.
  //4. Cerqueu la manera de mostrar el desconmpte amb un pop.

}