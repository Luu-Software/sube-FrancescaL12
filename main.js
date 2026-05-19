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
  let tipo = tipoColectivo.value;

  let precio = 0;

  // NACIONALES
  if (tipo === "nacional") {

    if (distanciaValor <= 3) {

      if (registradaValor === "si") {
        precio = 714.00;
      } else if (registradaValor === "tarifa social") {
        precio = 321.30;
      } else {
        precio = 1428.00;
      }

    } else if (distanciaValor <= 6) {

      if (registradaValor === "si") {
        precio = 807.07;
      } else if (registradaValor === "tarifa social") {
        precio = 363.18;
      } else {
        precio = 1614.14;
      }

    } else if (distanciaValor <= 12) {

      if (registradaValor === "si") {
        precio = 894.17;
      } else if (registradaValor === "tarifa social") {
        precio = 402.37;
      } else {
        precio = 1788.34;
      }

    } else if (distanciaValor <= 27) {

      if (registradaValor === "si") {
        precio = 983.78;
      } else if (registradaValor === "tarifa social") {
        precio = 442.70;
      } else {
        precio = 1967.56;
      }

    } else {

      if (registradaValor === "si") {
        precio = 1085.49;
      } else if (registradaValor === "tarifa social") {
        precio = 488.47;
      } else {
        precio = 2170.98;
      }

    }

  }

  // CABA
  else if (tipo === "caba") {

    if (distanciaValor <= 3) {

      if (registradaValor === "si") {
        precio = 753.74;
      } else if (registradaValor === "tarifa social") {
        precio = 339.18;
      } else {
        precio = 1198.45;
      }

    } else if (distanciaValor <= 6) {

      if (registradaValor === "si") {
        precio = 837.52;
      } else if (registradaValor === "tarifa social") {
        precio = 376.88;
      } else {
        precio = 1331.66;
      }

    } else if (distanciaValor <= 12) {

      if (registradaValor === "si") {
        precio = 902.04;
      } else if (registradaValor === "tarifa social") {
        precio = 405.91;
      } else {
        precio = 1434.24;
      }
  
    } else if (distanciaValor <= 27) {
  
      if (registradaValor === "si") {
        precio = 966.61;
      } else if (registradaValor === "tarifa social") {
        precio = 434.97;
      } else {
        precio = 1536.91;
      }
  
    } else {
  
      alert("Distancia inválida");
      return;
  
    }
  
  }


  

  // PROVINCIA
  else if (tipo === "provincia-bsas") {

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

    } else {

      if (registradaValor === "si") {
        precio = 1708.07;
      } else if (registradaValor === "tarifa social") {
        precio = 768.63;
      } else {
        precio = 3416.14;
      }

    }

  }

  tarifa.innerText = "El valor del boleto es: $" + precio;

});