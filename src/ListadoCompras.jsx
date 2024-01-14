import React from "react";
import { useState } from "react";

const Producto = ({nombre,comprado}) => {
  return <li className=" font-bold text-3xl py-5">{nombre}: {comprado?'👌':'❌'}</li>;
};

const ListadoCompras = () => {
  let arregloTienda =[
    {nombre:'Pan',comprado:true},
    {nombre:'Azucar',comprado:true},
    {nombre:'Amargo',comprado:true},
    {nombre:'Limon',comprado:true},
    {nombre:'Sal',comprado:false}
  ]

  const [arregloT, setarregloT] = useState(arregloTienda)

  return (
    <>
      <h1 className=" text-4xl font-bold text-red-400">Lista de compras</h1>
      <ol>
        {arregloT.map(product => <Producto key={product.nombre} nombre={product.nombre} comprado={product.comprado}></Producto>)}
      </ol>
    </>
  );
};

export default ListadoCompras;
