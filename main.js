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
  const tipoColectivo = document.getElementById("tipoColectivo");

  let precio = 0;

  if (distanciaValor <= 3) {

    if (registradaValor === "si") {
      precio = 715.24;
    } else if (registradaValor === "tarifa social") {
      precio = 339.18;
    } else {
      precio = 1137.23;
    }

  } else if (distanciaValor <= 6) {

    if (registradaValor === "si") {
      precio = 794.74;
    } else if (registradaValor === "tarifa social") {
      precio = 376.88;
    } else {
      precio = 1263.64;
    }

  } else if (distanciaValor <= 12) {

    if (registradaValor === "si") {
      precio = 855.97;
    } else if (registradaValor === "tarifa social") {
      precio = 405.91;
    } else {
      precio = 1360.99;
    }

  } else if (distanciaValor <= 27) {

    if (registradaValor === "si") {
      precio = 917.24;
    } else if (registradaValor === "tarifa social") {
      precio = 434.97;
    } else {
      precio = 1458.41;
    }
    else if (distanciaValor > 27) {
      tarifa.innerText="Distancia Invalida"

  }



  if (tipoColectivo.value === "Provincia de Buenos Aires")
  if (distanciaValor <= 3) {

    if (registradaValor === "si") {
      precio = 968.57;
    } else if (registradaValor === "tarifa social") {
      precio = 435.85;
    } else {
      precio = 1937.14;
    }

  } else if (distanciaValor <= 6) {

    if (registradaValor === "si") {
      precio = 1089.64;
    } else if (registradaValor === "tarifa social") {
      precio = 490.33;
    } else {
      precio = 2179.28;
    }

  } else if (distanciaValor <= 12) {

    if (registradaValor === "si") {
      precio = 1210.71;
    } else if (registradaValor === "tarifa social") {
      precio = 544.81;
    } else {
      precio = 2421.42;
    }

  } else if (distanciaValor <= 27) {

    if (registradaValor === "si") {
      precio = 1452.85;
    } else if (registradaValor === "tarifa social") {
      precio = 653.78;
    } else {
      precio = 2905.70;
    }
    else if (distanciaValor > 27) {

      if (registradaValor === "si") {
        precio = 1708.07;
      } else if (registradaValor === "tarifa social") {
        precio = 768.63;
      } else {
        precio = 3416.14;
      }

  }

  tarifa.innerText = "El valor del boleto es: $" + precio;
});