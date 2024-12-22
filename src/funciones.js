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
  let divisor = 2;
  const arrayMCD = [];
  arrayMCD.push(num);
  let sw = 0;
  let newNum = num;
  if (newNum === 1) {
    arrayMCD.push(1);
    return arrayMCD;
  }

  while (sw === 0) {
    if (newNum === 1) {
      sw = -1;
    }

    if (newNum % divisor === 0) {
      newNum /= divisor;
      arrayMCD.push(newNum);
    } else {
      divisor += 1;
    }
  }
  return arrayMCD;
};

const mcd = (array1, array2) => {
  const arrayResult = _.intersection(array1, array2);
  /* console.log(arrayResult); */
  return _.max(arrayResult);
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
