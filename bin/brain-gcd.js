#!/usr/bin/env node
import readlineSync from 'readline-sync';
import brainGames from './brain-games.js';
import {
  intentos,
  ramdon,
  divisores,
  mcd,
  rptaJuego,
} from '../src/funciones.js';

let misIntentos = intentos();
const jugador = brainGames();
let rptaMCD = 0;
let rptaJugador = '';
console.log('Encuentra el máximo común divisor de los números dados.');
while (misIntentos > 0) {
  let num1 = 1;
  let num2 = 1;
  num1 = ramdon();
  num2 = ramdon();
  rptaMCD = mcd(divisores(num1), divisores(num2));
  console.log(`Pregunta: ${num1} ${num2}`);
  rptaJugador = readlineSync.question('Tu respuesta: ');
  const result = rptaJuego(jugador, rptaJugador, rptaMCD.toString());
  misIntentos = result ? misIntentos -= 1 : -1;
}

if (misIntentos === 0) {
  console.log(`¡Felicidades, ${jugador}!`);
}
