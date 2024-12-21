#!/usr/bin/env node
import readlineSync from 'readline-sync';
import brainGames from './brain-games.js';
import {
  intentos,
  ramdon,
  rptaJuego,
  validarprimo,
} from '../src/funciones.js';

let misIntentos = intentos();
const jugador = brainGames();

console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');
while (misIntentos > 0) {
  const numero = ramdon();
  const isPrime = validarprimo(numero) ? 'yes' : 'no';
  console.log(`Pregunta: ${numero}`);
  const rptaJugador = readlineSync.question('Tu respuesta: ');
  const result = rptaJuego(jugador, rptaJugador, isPrime);
  /* console.log(result); */
  misIntentos = result ? misIntentos -= 1 : -1;
}

if (misIntentos === 0) {
  console.log(`¡Felicidades, ${jugador}!`);
}
