#!/usr/bin/env node

import readlineSync from 'readline-sync';
import brainGames from './brain-games.js';
import { ramdon, intentos, rptaJuego } from '../funciones.js';

export default () => {
  const jugador = brainGames();
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  let misIntentos = intentos();
  let numero;
  let ispar;

  while (misIntentos > 0) {
    numero = ramdon();
    ispar = numero % 2 === 0 ? 'yes' : 'no';
    console.log(`Pregunta: ${numero}`);
    const rptaJugador = readlineSync.question('Tu respuesta: ');
    const resultado = rptaJuego(jugador, rptaJugador, ispar);
    misIntentos = resultado ? misIntentos -= 1 : -1;
  }

  if (misIntentos === 0) {
    console.log(`¡Felicidades, ${jugador}!`);
  }
};
