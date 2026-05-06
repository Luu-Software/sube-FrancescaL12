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
      precio = 100;
    } else {
      precio = 120;
    }
  
  } else if (distanciaValor <= 6) {
    if (registradaValor === "si") {
      precio = 120;
    } else {
      precio = 150;
    }
  
  } else if (distanciaValor <= 12) {
    if (registradaValor === "si") {
      precio = 150;
    } else {
      precio = 180;
    }
  
  } else if (distanciaValor <= 27) {
    if (registradaValor === "si") {
      precio = 180;
    } else {
      precio = 220;
    }
  
  } else {
    if (registradaValor === "si") {
      precio = 220;
    } else {
      precio = 260;
    }
  }
  
  tarifa.innerText = "El valor del boleto es: $" + precio;
});
