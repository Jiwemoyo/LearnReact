import { useState } from "react";
import { AgregarTareas } from "./components/AgregarTareas";

export const ListadoApp = () => {
  const Producto = ({ id, nombre, comprado }) => {
    return (
      <li className=" m-3 font-bold text-xl">
        {id}: {nombre} {comprado ? "✅" : "❌"}
      </li>
    );
  };

  let listaProductos = [
    { id: 0, nombre: "Arroz", comprado: true },
    { id: 1, nombre: "Papas", comprado: true },
    { id: 2, nombre: "Cereal", comprado: true },
    { id: 3, nombre: "Jabon", comprado: true },
    { id: 4, nombre: "Pan", comprado: false },
    { id: 5, nombre: "Fruta", comprado: false },
    { id: 6, nombre: "Hielo", comprado: true },
  ];

  const [arreglo, setArreglo] = useState(listaProductos);

  const onAgregarProducto = (valor) => {
    let producto = {
      id: arreglo.length,
      nombre: valor,
      comprado: false,
    };
    setArreglo([...arreglo, producto]);
  };

  return (
    <>
      <h1 className=" text-red-500 font-bold text-3xl">Lista de compras</h1>
      <AgregarTareas procutines={onAgregarProducto}></AgregarTareas>
      <ol>
        {arreglo.map((item) => (
          <Producto
            key={item.id}
            id={item.id}
            nombre={item.nombre}
            comprado={item.comprado}
          ></Producto>
        ))}
      </ol>
    </>
  );
};
