alert("Acepta los terminos y condiciones de MinimalStore?");

let nombre = prompt("Ingresa nombre");
let apellido = prompt("Ingresa apellido");

if (nombre != " " && apellido != "") {
  alert("Bienvenido a Minimal Store : " + nombre + " " + apellido);
} else {
  alert("Error: ingresar nombre y apellido");
}

for (let i = 1; i <= 1; i++) {
  alert(
    " " +
      nombre +
      " eres el cliente Nº " +
      i +
      ",  y por eso tenemos estos combos para vos!!!"
  );
}

const presupuesto = Number(
  prompt(
    "Ingrese su presupuesto (de 1000 a 5000) para ofrecerles los combos disponibles en Minimal Store"
  )
);

function Combo(incluye, marca, colores) {
  this.incluye = incluye;
  this.marca = marca;
  this.colores = colores;
  this.mostrarCombo = function () {
    return ` 
    INCLUYE: ${this.incluye}
    MARCA: ${this.marca}
    COLORES DISPONIBLES: ${this.colores}`;
  };
}
const combo1 = new Combo(
  "2 Remeras Oversize",
  "Ribers",
  "Negro, Blanco, Gris, Salmon o Bordo"
);
const combo2 = new Combo("1 jean + 1 remera", "Calvo Clint", "Negro, Blanco");
const combo3 = new Combo(
  "1 jean mom y 2 remeras oversize",
  "Adimas",
  "Gris medianoche, Chocolate pasion"
);
const combo4 = new Combo(
  "2 jean + 2 remeras",
  "Lacostic",
  "Rojo, Verde, Negro"
);

const combo5 = new Combo(
  "Remera gastada + Zapatilla",
  "CONVERSEMOS",
  "Beige, Marron, Azul"
);

switch (presupuesto) {
  case 1000:
    alert("Te podemos ofrecer el combo remerukis:" + combo1.mostrarCombo());
    otroscombos();
    break;
  case 2000:
    alert("Te podemos ofrecer el combo completo:" + combo2.mostrarCombo());
    otroscombos();
    break;
  case 3000:
    alert("Te podemos ofrecer el combo completo + 1:" + combo3.mostrarCombo());
    otroscombos();
    break;

  case 4000:
    alert("Te podemos ofrecer el cambo FINDE FURIOSO:" + combo4.mostrarCombo());
    otroscombos();
    break;
  case 5000:
    alert("Te podemso ofrecer el cambo AESTHETIC:" + combo5.mostrarCombo());
    otroscombos();
    break;
  default:
    alert(
      "oh no !!!. Nuestros combos estan disponibles solo en precios de a mil. Podemos ofrecerte productos de nuestro Outlet"
    );
    outlet();
    break;
}

function outlet() {
  alert(
    "Vas a entrar en la seccion Outlet de Minimal Store. Presiona ACEPTAR "
  );
}
function otroscombos() {
  alert(
    "Muchas gracias por su compra, mientras procesamos el pago puede ingresar a consola (clcik derecho / INSPECCIONAR ) para conocer los otros combos"
  );
  const array = [combo1, combo2, combo3, combo4, combo5];
  console.log(array);
}
