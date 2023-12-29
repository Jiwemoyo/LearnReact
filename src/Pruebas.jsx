import { useState } from "react";
import { AgregarTareasW } from "./components/AgregarTareasW";

const Items =({nombre,comprado})=>{
  return(
    <li className=" font-bold text-3xl py-4">{nombre} {comprado?"✅":"❌"}</li>
  )
}

export const Pruebas = () => {

  let listaCompras =[
    {nombre:"Azucar",comprado:true},
    {nombre:"Papas",comprado:true},
    {nombre:"Miel",comprado:true},
    {nombre:"Pan",comprado:false},
    {nombre:"Chocolate",comprado:false}
  ]

  const [arreglo, setarreglo] = useState(listaCompras)


  return (
  <>
  <AgregarTareasW productinio={setarreglo}></AgregarTareasW>
  <ol>
    {
      arreglo.map(producto =><Items key={producto.nombre} nombre={producto.nombre} comprado={producto.comprado}></Items>)
    }
  </ol>
  </>
  )
};
