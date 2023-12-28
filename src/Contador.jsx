import { useState } from "react";

export const Contador = ({ value }) => {

  const[contador,setContador]=useState(value)

  
  const cliquendo = () => {
    setContador(contador+5);
  };

  return (
    <>
      <h1 className=" text-3xl font-bold ">Esto es un contador</h1>
      <p className=" my-4">{contador}</p>
      <button
        className=" bg-gray-800 rounded-lg text-yellow-300 p-4"
        onClick={cliquendo}
      >
        Soy un Boton
      </button>
    </>
  );
};
