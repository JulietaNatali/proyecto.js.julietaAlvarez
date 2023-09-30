class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class ListaDeProductos {
  constructor() {
    this.productos = [];
  }

  agregarProducto(nombre, precio) {
    const producto = new Producto(nombre, precio);
    this.productos.push(producto);
  }

  mostrarListado() {
    let listado = "Listado de Productos:\n";
    this.productos.forEach((producto, index) => {
      listado += `${index + 1}. Nombre: ${producto.nombre}, Precio: ${producto.precio}\n`;
    });

    alert(listado);
  }

  calcularTotal() {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }
}

function saludar() {
  let nombreVendedor = prompt("Ingresa tu nombre de vendedor!");
  alert("Bienvenido " + nombreVendedor + "!");
}

saludar();

let productosVendidos = new ListaDeProductos();
let respuesta = prompt("¿Quieres cargar productos vendidos? (SI/NO)");

while (respuesta.toUpperCase() === "SI") {
  let producto = prompt("Ingrese el nombre del producto:");
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));

  if (!isNaN(precio)) {
    productosVendidos.agregarProducto(producto, precio);
  } else {
    alert("Por favor, ingrese un precio válido.");
  }

  respuesta = prompt("¿Quieres cargar más productos vendidos? (SI/NO)");
}

if (productosVendidos.productos.length > 0) {
  alert(
    "Has vendido " +
      productosVendidos.productos.length +
      " productos por un total de $" +
      productosVendidos.calcularTotal().toFixed(2)
  );

  productosVendidos.mostrarListado();
} else {
  alert("No se han registrado ventas. Hasta la próxima.");
}
