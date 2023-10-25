class Producto {
  constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
  }
}

class ListaDeProductos {
  constructor() {
      this.productos = this.obtenerProductosGuardados() || [];
  }

  agregarProducto(nombre, precio) {
      const producto = new Producto(nombre, precio);
      this.productos.push(producto);
      this.guardarProductos(); 
  }

  mostrarListado() {
      let listado = "Listado de Productos:\n";
      this.productos.forEach((producto, index) => {
          listado += `${index + 1}. Nombre: ${producto.nombre}, Precio: $${producto.precio.toFixed(2)}\n`;
      });

      document.getElementById("productosList").textContent = listado;
  }

  calcularTotal() {
      return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }

  guardarProductos() {
      localStorage.setItem("productosVendidos", JSON.stringify(this.productos));
  }

  obtenerProductosGuardados() {
      const productosGuardados = localStorage.getItem("productosVendidos");
      return productosGuardados ? JSON.parse(productosGuardados) : [];
  }
}

const productosVendidos = new ListaDeProductos();

document.getElementById("ventaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const productoNombre = document.getElementById("productoNombre").value;
  const productoPrecio = parseFloat(document.getElementById("productoPrecio").value);

  if (!isNaN(productoPrecio)) {
      productosVendidos.agregarProducto(productoNombre, productoPrecio);
      productosVendidos.mostrarListado();
      document.getElementById("totalVentas").textContent = `$${productosVendidos.calcularTotal().toFixed(2)}`;

      document.getElementById("productoNombre").value = "";
      document.getElementById("productoPrecio").value = "";
  } else {
      alert("Por favor, ingrese un precio válido.");
  }
});

document.getElementById("limpiarVentas").addEventListener("click", function () {
  productosVendidos.productos = [];
  productosVendidos.mostrarListado();
  document.getElementById("totalVentas").textContent = "$0.00";
  localStorage.removeItem("productosVendidos");
});

