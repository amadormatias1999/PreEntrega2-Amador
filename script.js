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

switch (presupuesto) {
  case 1000:
    alert("Te podemos ofrecer el combo: 2 remeras oversize");
    break;
  case 2000:
    alert("Te podemos ofrecer el combo: 1 jean + 1 remera oversize");
    break;
  case 3000:
    alert("Te podemos ofrecer el combo: 2 remeras oversize + 1 jean mom");
    break;

  case 4000:
    alert("Te podemos ofrecer el cambo: 2 jean + 2 remeras oversize ");
    break;
  case 5000:
    alert("Te podemso ofrecer el cambo: 2 jean + 2 remeras + 1 billetera");
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
