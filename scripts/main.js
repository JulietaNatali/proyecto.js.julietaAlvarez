function saludar () {
  let nombreVendedor = prompt("Ingresa tu nombre de vendedor!");
  alert("Bienvenido " + nombreVendedor + "!");
}

saludar ();

let total = 0;
let productos = 0;
let respuesta = prompt("¿Quieres cargar productos vendidos? (SI/NO)");

while (respuesta.toUpperCase() === "SI") {
  let producto = prompt("Ingrese el nombre del producto:");
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));

  if (!isNaN(precio)) {
    total += precio;
    productos++;
  } else {
    alert("Por favor, ingrese un precio válido.");
  }

  respuesta = prompt("¿Quieres cargar más productos vendidos? (SI/NO)");
}

if (productos > 0) {
  alert(
    "Has vendido " +
      productos +
      " productos por un total de $" +
      total.toFixed(2)
  );
} else {
  alert("No se han registrado ventas. Hasta la próxima.");
}
