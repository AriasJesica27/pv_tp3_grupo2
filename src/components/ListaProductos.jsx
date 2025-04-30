import React, { useEffect } from "react";

const ListaProductos = () => {
  const productos = [
    { descripcion: "Teclado", precio: 30000 },
    { descripcion: "Auriculares", precio: 49000 },
    { descripcion: "Mouse", precio: 15000 },
    { descripcion: "Monitor", precio: 120000 },
    { descripcion: "Camara", precio: 25000 },

  ];

  const mostrarProductosEnConsola = () => {
    console.log("Listado de productos:");
    productos.forEach((producto) => {
      console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
    });
  };

  useEffect(() => {
    mostrarProductosEnConsola();
  }, []);

  // pto2
  const productosMayores20 = productos.filter(producto => producto.precio > 20);

  return (
    <div>
      <h1 style={{fontSize:"15px"}}>Lista de Productos</h1>
      <ul style={{ listStyleType: "none" }}>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto.descripcion} - ${producto.precio}
          </li>
        ))}
      </ul>
      
      <h2 style={{ fontSize: "15px", marginTop: "20px" }}>Productos con precio mayor a $20</h2> 
      <ul style={{ listStyleType: "none" }}>
        {productosMayores20.map((producto, index) => (
          <li key={index}>
            {producto.descripcion} - ${producto.precio}
          </li>
        ))}
      </ul>

    </div>
  );

};
export default ListaProductos;
 
