#!/usr/bin/env node
import readlineSync from 'readline-sync';
import brainGames from './brain-games.js';
import {
  operacion,
  ramdon,
  rptaJuego,
  intentos,
} from '../funciones.js';

export default () => {
  let misIntentos = intentos();
  const jugador = brainGames();

  while (misIntentos > 0) {
    const signo = operacion();
    const operando = ramdon(1, 10);
    const operador = ramdon(1, 10);
    let resulOperacion = 0;

    console.log('¿Cuál es el resultado de la expresión?');
    console.log(`Pregunta: ${operando} ${signo} ${operador}`);
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
};
