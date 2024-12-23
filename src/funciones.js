import _ from 'lodash';

const intentos = () => 3;

const ramdon = (lower = 1, upper = 30) => _.random(lower, upper);

const operacion = () => {
  const arrayOperaciones = ['+', '-', '*'];
  const index = _.random(arrayOperaciones.length - 1);
  return arrayOperaciones[index];
};

const rptaJuego = (jugador, rptaJugador, rptaCorrecta) => {
  if (rptaJugador === rptaCorrecta) {
    console.log('¡Correcto!');
    return true;
  }
  console.log(`'${rptaJugador}' es una respuesta incorreta ;(. La respuesta correcta era '${rptaCorrecta}'.\n¡Intentémoslo de nuevo, ${jugador}!`);
  return false;
};

const divisores = (num) => {
  const arrayX = [];
  const arrayY = [];
  const arrayXY = [];

  for (let i = 1; i <= num; i += 1) {
    arrayX.push(i);
  }

  for (let i = num; i >= 1; i -= 1) {
    arrayY.push(i);
  }

  for (let i = 0; i <= arrayX.length - 1; i += 1) {
    for (let j = 0; j <= arrayY.length - 1; j += 1) {
      if (arrayX[i] * arrayY[j] === num) {
        arrayXY.push(arrayX[i]);
        arrayXY.push(arrayY[j]);
      }
    }
  }

  return _.uniq(arrayXY);
};

const mcd = (array1, array2) => {
  const arrayResult = _.intersection(array1, array2);
  const maxMCD = _.max(arrayResult);
  return maxMCD;
};

const generarProgresion = () => {
  const items = ramdon(5, 10);
  let inicio = ramdon();
  const saltos = ramdon(1, 10);
  const progresion = [];
  for (let i = 1; i <= items; i += 1) {
    if (i === 1) {
      progresion.push(inicio);
    } else {
      inicio += saltos;
      progresion.push(inicio);
    }
  }
  return progresion;
};

const validarprimo = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  intentos,
  ramdon,
  operacion,
  rptaJuego,
  divisores,
  mcd,
  generarProgresion,
  validarprimo,
};
