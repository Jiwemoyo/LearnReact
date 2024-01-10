import React from "react";

const Producto = ({nombre,comprado}) => {
  return <li>{nombre}: {comprado?'👌':'❌'}</li>;
};

const ListadoCompras = () => {
  return (
    <>
      <h1 className=" text-4xl font-bold text-red-400">Lista de compras</h1>
      <ol>
        <Producto nombre={'paN'} comprado={false}></Producto>
        <Producto nombre={'Azucar'} comprado={true}></Producto>
        <Producto nombre={'chocolate'} comprado={true}></Producto>
      </ol>
    </>
  );
};

export default ListadoCompras;
