// PART C: Classe Cistella (col·lecció de jocs)
import { Joc } from './interfaces/joc';

export class Cistella {
  propietari: string;      // propietat tipada 1: nom del propietari
  jocs: Joc[];             // propietat tipada 2: llista de jocs a la cistella

  constructor(propietari: string) {
    this.propietari = propietari;
    this.jocs = [];
  }

  // Mètode 1: afegeix un joc a la cistella
  afegirJoc(joc: Joc): void {
    this.jocs.push(joc);
  }

  // Mètode 2: elimina un joc per id, retorna true si s'ha eliminat
  eliminarJoc(id: number): boolean {
    const idx = this.jocs.findIndex(j => j.id === id);
    if (idx !== -1) {
      this.jocs.splice(idx, 1);
      return true;
    }
    return false;
  }

  // Getter: preu total de tots els jocs de la cistella
  get preuTotal(): number {
    return this.jocs.reduce((total, joc) => total + joc.preu, 0);
  }
}
