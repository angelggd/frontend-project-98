#!/usr/bin/env node
import readlineSync from 'readline-sync';
import brainGames from './brain-games.js';
import {
  generarProgresion,
  intentos,
  ramdon,
  rptaJuego,
} from '../src/funciones.js';

let misIntentos = intentos();
const jugador = brainGames();

console.log('¿Qué número falta en la progresión?');
while (misIntentos > 0) {
  const secuencia = generarProgresion();
  const indexOculto = ramdon(0, secuencia.length - 1);
  const secuenciaMostrada = secuencia.map((item, index) => {
    let itemTemp = item;
    if (index === indexOculto) {
      itemTemp = '..';
    }
    return itemTemp;
  });
  const rptaCorrecta = secuencia[indexOculto];
  console.log(`Pregunta: ${secuenciaMostrada}`);
  const rptaJugador = readlineSync.question('Tu respuesta: ');
  const result = rptaJuego(jugador, rptaJugador, rptaCorrecta.toString());
  if (result) {
    misIntentos -= 1;
  } else {
    misIntentos = -1;
  }
}

if (misIntentos === 0) {
  console.log(`¡Felicidades, ${jugador}!`);
}
