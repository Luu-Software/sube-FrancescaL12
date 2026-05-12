/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  let registradaValor = registrada.value;
  let distanciaValor = Number(distancia.value);

  let precio = 0;

  if (distanciaValor <= 3) {

    if (registradaValor === "si") {
      precio = 715.24;
    } else {
      precio = 1137.23;
    }

  } else if (distanciaValor <= 6) {

    if (registradaValor === "si") {
      precio = 794.74;
    } else {
      precio = 1263.64;
    }

  } else if (distanciaValor <= 12) {

    if (registradaValor === "si") {
      precio = 855.97;
    } else {
      precio = 1360.99;
    }

  } else if (distanciaValor <= 27) {

    if (registradaValor === "si") {
      precio = 917.24;
    } else {
      precio = 1458.41;
    }

  }

  tarifa.innerText = "El valor del boleto es: $" + precio;
});
