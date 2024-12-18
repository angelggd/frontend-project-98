const intentos = () => 3;

const ramdon1 = () => Math.floor(Math.random() * 10);

const operacion = () => {
  const arrayOperaciones = ['+', '-', '*'];
  const index = Math.floor(Math.random() * arrayOperaciones.length);
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

export {
  intentos,
  ramdon1,
  operacion,
  rptaJuego,
};
