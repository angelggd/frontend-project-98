#!/usr/bin/env node
import readlineSync from 'readline-sync';
import saludo from '../src/cli.js';

export default () => {
  console.log('¡Bienvenido a Brain Games!');
  const nombre = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(saludo(nombre));
  return nombre;
};
