import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prova');

  //Objectiu de la sesio 2: veure la diferencia entre JS i TS --> TS =JS + tipus
  function saludar(nom){
    return nom.toUpperCase();
  }

  saluda(40);

}
