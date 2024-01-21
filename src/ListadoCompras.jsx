import React, { useState } from "react";
import AgregarProducto from "./components/AgregarProducto";

const Producto = ({ nombre, comprado }) => {
  return <li className="font-bold text-3xl py-5">{nombre}: {comprado ? '👌' : '❌'}</li>;
};

const ListadoCompras = () => {
  let arregloTienda = [
    { nombre: 'Pan', comprado: true },
    { nombre: 'Azucar', comprado: true },
    { nombre: 'Amargo', comprado: true },
    { nombre: 'Limon', comprado: true },
    { nombre: 'Sal', comprado: false }
  ];

  const [arregloT, setarregloT] = useState(arregloTienda);

  const agregarProducto = () => {
    setarregloT([...arregloT, { nombre: 'Nuevo Producto', comprado: false }]);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-red-400">Lista de compras</h1>

      <AgregarProducto/>

      <ol>
        {arregloT.map(product => (
          <Producto key={product.nombre} nombre={product.nombre} comprado={product.comprado} />
        ))}
      </ol>
    </>
  );
};

export default ListadoCompras;
