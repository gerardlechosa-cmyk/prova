// Classe Alumne

export class Alumne {
  nom: string;
  edat: number;
  cicle: string;
  notes: number[];

  constructor(nom: string, edat: number, cicle: string, notes: number[]) {
    this.nom = nom;
    this.edat = edat;
    this.cicle = cicle;
    this.notes = notes;
  }

  // Retorna una presentació de l'alumne
  presentar(): string {
    return `Soc ${this.nom}, tinc ${this.edat} anys i estudio ${this.cicle}`;
  }

  // Getter: calcula la mitjana de les notes
  get mitjanaNotes(): number {
    if (this.notes.length === 0) return 0;
    return this.notes.reduce((acc, n) => acc + n, 0) / this.notes.length;
  }

  // Getter: true si la mitjana és >= 5
  get haAprobat(): boolean {
    return this.mitjanaNotes >= 5;
  }
}

// Dues instàncies d'Alumne
const alumne1 = new Alumne('Gerard', 20, 'DAW', [7, 8, 6, 9]);
const alumne2 = new Alumne('Anna', 17, 'DAM', [4, 3, 5, 2]);

console.log(alumne1.presentar());
console.log('Mitjana:', alumne1.mitjanaNotes);
console.log('Ha aprovat?', alumne1.haAprobat);

console.log(alumne2.presentar());
console.log('Mitjana:', alumne2.mitjanaNotes);
console.log('Ha aprovat?', alumne2.haAprobat);
