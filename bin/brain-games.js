#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {saludo} from '../src/cli.js' 

console.log('¡Bienvenidos a Brain Games!')
const nombre = readlineSync.question('¿ Cual es tu nombre ? ')

console.log(saludo(nombre));
