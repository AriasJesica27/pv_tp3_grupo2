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

  // pto 3
    const productosConIva = productos.map(producto => ({
      descripcion:producto.descripcion,
      precioConIva: (producto.precio * 1.21).toFixed(2),
    }));

  // pto 4 
  const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);

  //pto 5
  const productosConNuevo = [...productos, { descripcion: "Parlante Bluetooth", precio: 59000.90 }];

   //punto 6 
   const precioMinimo = productos.reduce((min, producto) => {
    if (producto.precio < min) {
      return producto.precio;
    } else {
      return min;
    }
  }, productos[0].precio);
  const productosSinElMasBarato = productos.filter(producto => producto.precio !== precioMinimo);

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

      <h3 style={{fontSize: "15px",marginTop:"20px"}}>Productos Con Precio IVA (21%)</h3>
      <ul style={{listStyleType: "none"}}>
        {productosConIva.map((producto,index) => (
          <li key={index}>
               {producto.descripcion} - ${producto.precioConIva}
          </li>
        
      
      ))}
      </ul>

      <h2 style={{ fontSize: "15px", marginTop: "20px" }}>Productos ordenados por precio (menor a mayor)</h2>
<ul style={{ listStyleType: "none" }}>
  {productosOrdenados.map((producto, index) => (
    <li key={index}>
      {producto.descripcion} - ${producto.precio}
    </li>
  ))}
</ul>

<h2 style={{ fontSize: "15px", marginTop: "20px" }}>Productos con nuevo producto agregado</h2>
<ul style={{ listStyleType: "none" }}>
  {productosConNuevo.map((producto, index) => (
    <li key={index}>
      {producto.descripcion} - ${producto.precio}
    </li>
  ))}
</ul>
    <h3 style={{fontSize: "15px",marginTop:"20px"}}>Array sin el producto que tiene el  precio mas bajo  </h3>
      <ul style={{ listStyleType: "none" }}>
        {productosSinElMasBarato.map((producto, index) => (
        <li key={index}>
         {producto.descripcion} - ${producto.precio}
        </li>
        ))}
      </ul> 




    </div>
  );

};
export default ListaProductos;
 
