// Funcions auxiliars (Part C - Funcions auxiliars)

// Retorna una salutació personalitzada
export function saludar(nom: string): string {
  return `Hola, ${nom}!`;
}

// Retorna true si l'edat és >= 18
export function esMajorEdat(edat: number): boolean {
  return edat >= 18;
}

// Suma tots els elements d'un array de números
export function sumarArray(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
