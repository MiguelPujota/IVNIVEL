// Arreglo inicial de productos
const productos = [
  { nombre: "Pan artesanal", precio: "$2.00", descripcion: "Pan fresco hecho en horno de leña." },
  { nombre: "Croissant", precio: "$1.50", descripcion: "Crujiente y con mantequilla." },
  { nombre: "Tarta de manzana", precio: "$3.50", descripcion: "Postre clásico con manzanas caramelizadas." }
];

// Referencias al DOM
const lista = document.getElementById("lista-productos");
const btnAgregar = document.getElementById("btn-agregar");

// Función para renderizar productos
function renderProductos() {
  // Limpiar lista antes de renderizar
  lista.innerHTML = "";
  
  productos.forEach(producto => {
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${producto.nombre}</strong> - ${producto.precio}<br>
      <em>${producto.descripcion}</em>
    `;
    lista.appendChild(item);
  });
}

// Evento para agregar un nuevo producto
btnAgregar.addEventListener("click", () => {
  const nuevoProducto = {
    nombre: "Producto nuevo",
    precio: "$0.00",
    descripcion: "Descripción pendiente."
  };
  productos.push(nuevoProducto);
  renderProductos();
});

// Render inicial al cargar la página
renderProductos();