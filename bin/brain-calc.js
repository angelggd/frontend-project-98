#!/usr/bin/env node
import readlineSync from 'readline-sync';
import brainGames from './brain-games.js';
import {
  operacion,
  ramdon1,
  rptaJuego,
  intentos,
} from '../src/funciones.js';

let misIntentos = intentos();

const jugador = brainGames();

while (misIntentos > 0) {
  const signo = operacion();
  const operando = ramdon1();
  const operador = ramdon1();
  let resulOperacion = 0;

  console.log('¿ Cual es el resultado de la operación ?');
  console.log(`Presunta: ${operando} ${signo} ${operador} `);
  const rptaJugador = readlineSync.question('Tu Respuesta: ');

  if (signo === '+') {
    resulOperacion = operando + operador;
  } else if (signo === '-') {
    resulOperacion = operando - operador;
  } else {
    resulOperacion = operando * operador;
  }

  const resultado = rptaJuego(jugador, rptaJugador, resulOperacion.toString());
  misIntentos = resultado ? misIntentos -= 1 : -1;
}

if (misIntentos === 0) {
  console.log(`¡Felicidades, ${jugador}!`);
}
