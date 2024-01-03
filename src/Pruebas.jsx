import { useState } from "react";
import { AgregarTareasW } from "./components/AgregarTareasW";

const Items =({id,nombre,comprado})=>{
  return(
    <li className=" font-bold text-3xl py-4">{id} {nombre} {comprado?"✅":"❌"}</li>
  )
}

export const Pruebas = () => {

  let listaCompras =[
    {id:0,nombre:"Azucar",comprado:true},
    {id:1,nombre:"Papas",comprado:true},
    {id:2,nombre:"Miel",comprado:true},
    {id:3,nombre:"Pan",comprado:false},
    {id:4,nombre:"Chocolate",comprado:false}
  ]

  const [arreglo, setarreglo] = useState(listaCompras)


  const onAddProduct =(valor)=>{
    let producto ={
      id:arreglo.length,
      nombre:valor,
      comprado:false
    }

    setarreglo([...arreglo,producto])
  }


  return (
  <>
  <AgregarTareasW productinio={onAddProduct}></AgregarTareasW>
  <ol>
    {
      arreglo.map(producto =><Items key={producto.id} id={producto.id} nombre={producto.nombre} comprado={producto.comprado}></Items>)
    }
  </ol>
  </>
  )
};
